import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PropertyView from './pages/PropertyView';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/'} component={Home} exact />
                <Route path={'/property/:id'} component={PropertyView} exact />
            </Switch>
        );
    }
}
