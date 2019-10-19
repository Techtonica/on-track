import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes.js';
import './App.css';
// import Nav from './components/layout/nav/nav.js';
// import Footer from './components/layout/footer/footer';

const App = () => {

  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default withRouter(App);
