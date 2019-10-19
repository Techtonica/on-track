import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StudentSubmission from '../replicated/studentSubmission'

const Routes = () => (
  <Switch>
    {/* <Route exact path='/' render={ () => <Home />} /> */}
    <Route exact path='/studentSubmission/:topic' render={ () => <StudentSubmission />} />
    {/* <Route exact path='/teacher' render={ () => <Teacher />} /> */}
  </Switch>
);

export default Routes;
