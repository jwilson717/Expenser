import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from "./pages/loginPage";
import { SignUpPage } from './pages/signUpPage';
import './scss/app.scss';
import {DashboardPage} from './pages/dashboardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/dahsboard" component={DashboardPage}/>
      </Switch>
    </Router>
  );
}

export default App;
