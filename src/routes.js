import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login';


class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          {/*<Route exact path="/home" component={Home} />*/}
          {/*<Route exact path="/user/:id" component={User} />*/}
        </div>
      </Router>
    );
  }
}

export default Routes;