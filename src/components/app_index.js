import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { clearData } from '../actions'

import WeatherList from '../containers/weather_list';

class AppIndex extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clearData();
  }
 
  render() {
    
  return (
        <div>
          <h4>Application de previsions meteo</h4>
          <div className="btn-group">
            <Link to="/app/search" className="btn btn-secondary" >Search by name</Link>
            <Link to="/app/coord" className="btn btn-secondary" >Search by coordinate</Link>
            <button className="btn btn-secondary" onClick={this.handleClick}>Clear data </button>
          </div>
          <div>
            <WeatherList />
          </div>
        </div>
      );
  }
}

export default connect(null, { clearData })(AppIndex);