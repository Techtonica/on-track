import React from 'react';
import { withRouter } from 'react-router-dom';
import './nav.css';

const Nav = () => {

  return(
    <>
      <nav>
        <div className="nav-left">
          <img src="#" alt="techtonica logo"/>
        </div>
        <div className="nav-right">
          <button className="nav-button">Login</button>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Nav);