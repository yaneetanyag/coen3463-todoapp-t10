import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './../components/App';
import TodolistContainer from '../container/TodolistContainer';
import LoginContainer from '../container/LoginContainer';

var routes = (
    <Router history={browserHistory} >
        <Route path='/' component={App}>
            <IndexRoute component={LoginContainer} />
            <Route path ='todo' component={TodolistContainer} />
        </Route>
    </Router>
)

export default routes;