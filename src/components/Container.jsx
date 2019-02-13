import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';

class Container extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        );
    }
}

export default Container;
