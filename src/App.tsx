import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from "./pages/loginPage";
import { SignUpPage } from './pages/signUpPage';
import './scss/app.scss';
import {DashboardPage} from './pages/dashboardPage';
import { AuthProvider } from './util/authContext';
import { PrivateRoute } from './util/privateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/signup" component={SignUpPage}/>
          <PrivateRoute path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
