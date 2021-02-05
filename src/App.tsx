import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from "./pages/loginPage";
import { SignUpPage } from './pages/signUpPage';
import './scss/app.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
      </Switch>
    </Router>
  );
}

export default App;
