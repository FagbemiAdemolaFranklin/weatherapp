require("dotenv").config;
const react = require("react");
const Form = require("./Form").Form;
const WeatherParams = require("./WeatherParams").WeatherParams;
const HourlyTemp = require("./HourlyTemp").HourlyTemp;
const useState= require("react").useState;

export function Weather() {
    const [result, setResult] = useState([]);
    const [location, setLocation] = useState({
        "longitude":"",
        "latitude":""
    })
    const [locationState, setLocationState] = useState(false);
    window.navigator.geolocation.getCurrentPosition((success) => {
        setLocationState(true);
        var {longitude, latitude} = success.coords;
        setLocation({
            "longitude":longitude,
            "latitude":latitude
        });
        
    }, (error) => {
        console.log(error.message);
    });
    const [input, setInput] = useState("");
    function OnChange(event) {
        var {city} = event.target;
        setInput(city);
    }

    const [search, setSearch] = useState("");
    function OnClick() {
        setSearch(input);
        setInput("");
    }

    if (locationState) {
        var options = {
            method:"GET"
        }
        var url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.API_KEY}&units=metric`
        fetch(url, options).then((jsonResult) => {
            alert(jsonResult)
            console.log(jsonResult);
            setResult(jsonResult);
        })
    }else{
        
        if(search.length == 0 ) {
            var options = {
                method:"GET"
            }
            var url = `https://api.openweathermap.org/data/2.5/weather?q=america&appid=${process.env.API_KEY}&units=metric`
            fetch(url, options).then((jsonResult) => {
                alert(jsonResult)
                console.log(jsonResult);
                setResult(jsonResult);
            })
        }else if(search.length > 0 ) {
            var options = {
                method:"GET"
            }
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.API_KEY}&units=metric`
            fetch(url, options).then((jsonResult) => {
                alert(jsonResult)
                console.log(jsonResult);
                setResult(jsonResult);
            })
        }
        
    }

    return(<div>
        <Form OnChange = {OnChange} OnClick = {OnClick} /> 
        {
            <div>
                <WeatherParams 
                    degrees = {result.main.temp} 
                    situation = {result.weather[0].description}
                    icons = {result.weather[0].icon}  
                />

            </div>
            
            

        }
       

    </div>)
    
}