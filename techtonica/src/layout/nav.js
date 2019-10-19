import React from 'react';
import { withRouter } from 'react-router-dom';
import './nav.css';

const Nav = () => {

  return(
    <>
      <nav>
        <div className="nav-left">
          <img src={process.env.PUBLIC_URL + '/img/techtonica_logo.png'} alt="techtonica logo" className="nav-logo"/>
        </div>
        <div className="nav-right">
          <button className="nav-button">
            <a href="/studentSubmission/:topic">Login</a>
          </button>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Nav);