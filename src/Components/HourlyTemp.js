const react = require("react");


export function HourlyTemp(props) {
    return (<div>
        <i>
            {props.icons}
        </i>
        <h6>
            {props.temp}
        </h6>
    </div>)
}