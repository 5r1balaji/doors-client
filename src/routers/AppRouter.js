
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginForm from '../components/Login/LoginForm';
import { PublicRoute } from './publicRouter';
import HomePage from '../components/Dashboard/dashboard';
import { PrivateRoute } from './privateRouter';
import { connect } from 'react-redux';

const AppRouter = ({isAuthenticated}) => (
    <BrowserRouter>
      <div>
        <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/register" component={LoginForm} />
            <PrivateRoute exact path="/home" component={HomePage} isAuthenticated={isAuthenticated} />
        </Switch>  
      </div>
    </BrowserRouter>
  );
  

  function mapStateToProps(state){
    return {
      isAuthenticated: state.login.authToken && state.login.authToken.token ?true:false
    }
  }
  export default connect(mapStateToProps)(AppRouter);