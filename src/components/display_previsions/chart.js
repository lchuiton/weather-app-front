import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

    function average(data) {
        return _.round(_.sum(data)/data.length,1);
    }
    function max(data) {
        return _.round(_.max(data),1);
    }
    function min(data) {
        return _.round(_.min(data),1);
    }

export default (props) => {
    return (
        <div>
            <Sparklines heigth={120} width={130} data= {props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Average: {average(props.data)} {props.units}</div>
            <div>Max: {max(props.data)} {props.units}</div>
            <div>Min: {min(props.data)} {props.units}</div>

        </div>
    );
}