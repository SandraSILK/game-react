import React, { Component } from 'react';
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';
import './styles/App.scss';
import './styles/Grid.scss';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
        <Router>
            <Nav />
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
        </Router>
        );
    }
}

export default App;
