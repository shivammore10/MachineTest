import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Task from './components/Task1';
import User from './components/User';
import NotFound from './components/not-found';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/Login" exact component={Login} />
            <Route path="/Home"  component={Home} />
            <Route path="/Task" component={Task} />
            <Route path="/User" component={User} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/Login" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
