
import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import LoginForm from '../components/Login/LoginForm';
import { PublicRoute } from './publicRouter';


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/register" component={LoginForm} />
        </Switch>  
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;