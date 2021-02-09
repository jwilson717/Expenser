import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuthContext } from './authContext';

export const PrivateRoute: React.FC<{component: any, path: string}>  = ({component, path}) => {
   const context = useAuthContext();
   const history = useHistory();
   if (!context.user) {
      history.push("/");
   }
   return (
      <Route exact path={path} component={component} />
   )
}