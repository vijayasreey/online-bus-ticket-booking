import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import ContactUsPage from './ContactUsPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/contact" component={ContactUsPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
