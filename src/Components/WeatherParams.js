const react = require("react");


export function WeatherParams(props) {

    return(<div>
        <h1>
            {props.degrees}
        </h1>
        <h3>
            {props.city}
        </h3>
        <h3>
            {props.situation}
        </h3>

        <div>
            <i>
                {props.icons}
            </i>
           
           
        </div>
    </div>)
}