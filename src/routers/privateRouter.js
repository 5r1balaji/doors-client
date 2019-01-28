import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route  {...rest} render={(props) => (
      isAuthenticated ? (
        <div>
          <div className="bodyComponent">
                <Component {...props} />
          </div>
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );

export default PrivateRoute;
