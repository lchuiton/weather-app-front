import React, { Component, PropTypes } from 'react';  
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchByCoord } from '../actions/index';
    
// REFACTOR => Sortir la map du form

//Je suis pas sur d'en avoir besoin
  //var marker;

export default class GoogleMapPerso extends Component {
  
  constructor(props) {
    super(props);

    this.handleCoordinatesUpdate = this.handleCoordinatesUpdate.bind(this);
  }


  componentDidMount() {
    this.map = this.createMap();
    google.maps.event.addListener(this.map, 'click', (event) => this.handleCoordinatesUpdate(event));
  }
  

  componentWillUnmount() {
      google.maps.event.clearListeners(this.map, 'click');
  }

  handleCoordinatesUpdate(event) {
    this.props.updateCoordinate(event.latLng);
  }

  createMap() {
    let mapOptions = {
        center: {lat:this.props.lat ,lng:this.props.lng},
        zoom: this.props.zoom,
        disableDefaultUI: !this.props.visible
    }
    return new google.maps.Map(this.refs.mapdiv, mapOptions)
  }
  
  render() {
    const mapStyle = {
      width: '100%',
      height: '100%',
      border: '1px solid black'
    };
    
    return (

      <div style={mapStyle}>
        <div ref="mapdiv" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}
