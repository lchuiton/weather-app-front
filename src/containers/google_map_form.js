import React, { Component, PropTypes } from 'react';  
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchByCoord } from '../actions/index';
    

//Je suis pas sur d'en avoir besoin
  //var marker;

class GoogleMapForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      lat: '' ,
      lng: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.searchByCoord(this.props.lat, this.props.lng)
    .then(() => {
            this.context.router.push('/');
        });
  }
 
  render() {
    const { handleSubmit } = this.props;
    
    return (

      <div>
        <h4>Click on the map to get coordinates</h4>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <div className={`input-group`}> 
            <input 
              id="lat"
              placeholder="Latitude"
              className="form-control" 
              value={this.props.lat} 
              onChange={this.onLatitudeChange}
            />
            <input 
              id="lng"
              placeholder="Longitude"
              className="form-control" 
              value={this.props.lng} 
              onChange={this.onLongitudeChange}
            />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchByCoord }, dispatch);
}

export default connect(null, mapDispatchToProps)(GoogleMapForm);