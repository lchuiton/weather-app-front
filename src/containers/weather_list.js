import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import ChartsDisplay from '../components/display_previsions/charts_display';
import NumericDisplay from '../components/display_previsions/numeric_display';
import SkyDisplay from '../components/display_previsions/sky_display';

const CHARTS = "CHARTS";
const NUMERICS = "NUMERICS";
const SKY = "SKY";

export default class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: CHARTS,
            message:''
        };
        
        // NEVER FORGET THAT !
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        event.preventDefault();
        
        this.setState({
            activeKey: eventKey
        })
    }

    render() {
     
        if (this.state.activeKey == CHARTS) {
            var component = <ChartsDisplay />
        } else if (this.state.activeKey == NUMERICS) {
            var component = <NumericDisplay />
        } else if (this.state.activeKey == SKY) {
            var component = <SkyDisplay />
        }

        return (
            <div>
                <Nav bsStyle="tabs" activeKey={ this.state.activeKey }  onSelect={this.handleSelect}>
                    <NavItem eventKey={ CHARTS } >Charts</NavItem>
                    <NavItem eventKey={ NUMERICS } >Numbers</NavItem>
                    <NavItem eventKey={ SKY } >Sky state</NavItem>
                </Nav>
               {component}
            </div>
        );
    }
}
