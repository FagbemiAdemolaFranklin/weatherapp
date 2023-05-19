const react = require("react");


export function Form (props) {
    return(<div>
        <input type="text" name="city" placeholder="Input City" onChange={props.OnChange}></input>
        <button onClick={props.OnClick}>Search</button>
    </div>)
}