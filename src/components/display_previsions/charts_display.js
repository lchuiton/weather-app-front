import React, { Component } from 'react';
import { connect } from 'react-redux';


import Chart from '../display_previsions/chart';
import GoogleMapPerso from '../google_map_perso';

class ChartsDisplay extends Component {
    
    renderWeather(cityData) {
        const name = cityData.city.name + ' ('+cityData.city.country+')' ;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        

        

        return (
            <tr key={name}>
                <td className="notClickable">
                    <GoogleMapPerso 
                        zoom={10}
                        lat= {lat}
                        lng= {lon}
                        width={'100%'}
                        height={'100%'}
                        visible={false} 
                    />
                </td>
                <td className="chart-display">
                    <Chart data={temps} color="blue" units="°C"/>
                </td>
                <td className="chart-display">
                    <Chart data={pressures} color="yellow" units="hPa" />
                </td>
                <td className="chart-display">
                    <Chart data={humidities} color="green" units="%" />
                </td>
                
            </tr>
            
        );
    }

    render() {
        if(this.props.weather.length == 0) {
            return <div>Pas de recherche</div>
        }

        return (
            <table className="table table-hover width=auto">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({weather}) {
    return { weather }; // { weather } === { weather: weather };
}

export default connect(mapStateToProps)(ChartsDisplay)