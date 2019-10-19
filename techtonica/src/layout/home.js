import React from 'react';
import { withRouter } from 'react-router-dom';
import './home.css';

const Home = () => {

  return(
    <>
      <div className="home-body">
        <h1>Techtonica Portal</h1>
      </div>
    </>
  )
}

export default withRouter(Home);