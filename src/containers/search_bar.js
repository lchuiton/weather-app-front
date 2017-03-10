import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    
    constructor(props) {
        super(props);

        this.state = { 
            city: '',
            country:''
        };
      

        this.onInputChange = this.onInputChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({city: event.target.value});
    }

    onCountryChange(event) {
        this.setState({country: event.target.value});
    }

    onFormSubmit(event) {
       event.preventDefault();

       this.props.fetchWeather(this.state.city, this.state.country)
       .then(() => {
            this.context.router.push('/');
        });
       
    }

    render() {
        return (
            <div>
                <h4>Enter a city name and a country</h4>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input 
                        placeholder="Get a five-day forecast in your favorite cities"
                        className="form-control"
                        value={this.state.city}
                        onChange={this.onInputChange}
                    />
                    <input className="input-group"
                        placeholder="Choose your country"
                        className="form-control"
                        value={this.state.country}
                        onChange={this.onCountryChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);