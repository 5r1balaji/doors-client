import React, { Component } from 'react';
import classes from './App.css';
import LoginForm from './components/Login/LoginForm';
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={LoginForm} />
      </div>    
    );
  }
}

export default App;


