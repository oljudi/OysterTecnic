import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound.js';
import Home from './pages/Home/Home.js';
import Signup from './pages/SignUp/Signup.js';
import Dashboard from './pages/Dashboard/Dashboard.js';

const Router = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Router;
