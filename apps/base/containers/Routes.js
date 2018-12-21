import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from '../screens/Index';
import SignIn from '../screens/SignIn';

const Root = () => {
  return (
    <Router basename="/base">
      <React.Fragment>
        <Route exact path="/" component={Index} />
        <Route exact path="/signin" component={SignIn} />
      </React.Fragment>
    </Router>
  );
};

export default Root;
