import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import './App.css';
import Nav from './layout/nav';
import Footer from './layout/footer';

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default withRouter(App);
