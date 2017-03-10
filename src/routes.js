import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import AppIndex from './components/app_index'; 
import SearchForm from './components/search_name'; 
import SearchMap from './components/search_map'; 

// TODO: Header et Footer
export default (
    <Route path="/" component={App}>
        <IndexRoute component={AppIndex} />
        <Route path="app/search" component={SearchForm} />
        <Route path="app/coord" component={SearchMap} />
    </Route> 
);