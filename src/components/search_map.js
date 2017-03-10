import React, { Component } from 'react';

import { Link } from 'react-router';

import WeatherList from '../containers/weather_list';
import GoogleMapPerso from '../components/google_map_perso';
import GoogleMapForm from '../containers/google_map_form';

    
const initialLatitude = 0;
const initialLongitude = 0;


export default class SearchMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: '' ,
      lng: ''
    }
    this.handleCoordinatesUpdate = this.handleCoordinatesUpdate.bind(this);

  }

  handleCoordinatesUpdate(filterValue) {
    this.setState({
        lat: filterValue.lat(),
        lng: filterValue.lng()
    });
  }

  render() {
    return (
      <div>
        <h3>Search with Google Maps</h3>
          
        <Link to="/" className="btn btn-secondary" >Back to main menu</Link>
    
        <div className="search-map-div">
          <GoogleMapForm lat={this.state.lat} lng={this.state.lng}/>
          <GoogleMapPerso 
              updateCoordinate={this.handleCoordinatesUpdate}
              zoom={3}
              lat= {initialLatitude}
              lng= {initialLongitude}
              width={'100%'} 
              height={'100%'} 
              visible={false} 
              />
        </div>
    </div>
    );
  }
} 
