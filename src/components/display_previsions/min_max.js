import _ from 'lodash';
import React from 'react';


export default (props) => {
    let minTemp  = _.round(props.data.minTemp - 273, 1);
    let maxTemp = _.round(props.data.maxTemp - 273, 1);
    return (
        <td>
            <ul className="list-group">
                <li className="list-group-item">{props.data.date}</li>
                <li className="list-group-item">Max: {maxTemp}°C</li>
                <li className="list-group-item">Min: {minTemp}°C</li>
            </ul>
        </td>
    );
}