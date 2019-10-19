import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './nav.css';
import AuthModal from './authModal';

const Nav = () => {
  const email = localStorage.email;
  const [ loggedIn, setLoggedIn, toggle, setToggle ] = useState(!!email.length);
  const [ modalData, setModalData ] = useState({
    hidden: false,
    email: ""
  });

  const logout = () => {
    localStorage.email = "";
    setLoggedIn({ loggedIn: false })
  }

  const showLogout = () => (
    <>
      <span>You're currently logged in under {email}.</span>
      <span className="session-btn" onClick={logout}>Log Out</span>
    </>
  )

  const showLogin = () => (
    <span className="session-btn" onClick={() => setToggle(!toggle)}>Login</span>
  )

  const showModal = () => (
    <div className="modal-container">

      <h3>Please sign in with your email.</h3>
      <form className="signin" onSubmit={handleSubmit}>

        <label>
          Email:
            <input type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <input type="submit" value="Log In" />

      </form>

    </div>
  )

  const handleChange = (e) => {
    setModalData({ ...modalData, email: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.email = email;
    setModalData({ ...modalData, hidden: true });
  }

  return(
    <nav>

      <div className="nav-left">
        <a href="/">
          <img src={process.env.PUBLIC_URL + '/img/techtonica_logo.png'} alt="techtonica logo" className="nav-logo"/>
        </a>
      </div>
      
      <div className="nav-right">
        { loggedIn ? showLogout() : showLogin() }
      </div>

      { toggle ? <></> : showModal() }

    </nav>
  )
}

export default withRouter(Nav);