import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from "./pages/loginPage";
import { SignUpPage } from './pages/signUpPage';
import {DashboardPage} from './pages/dashboardPage';
import { AuthProvider } from './util/authContext';
import { PrivateRoute } from './util/privateRoute';
import { customTheme } from './styles/styles';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import './css/app.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <PrivateRoute path="/dashboard" component={DashboardPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
