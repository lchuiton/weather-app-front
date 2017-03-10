import React, { Component } from 'react';

import { Link } from 'react-router';

import SearchBar from '../containers/search_bar';

export default class SearchForm extends Component {
  render() {
    return (
      <div>
        <h3>Search with Google Map</h3>
         <Link to="/" className="btn btn-secondary" >Back to main menu</Link>
         <SearchBar />
      </div>
    );
  }
}
