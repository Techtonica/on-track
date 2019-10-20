import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const [ loggedIn, setLoggedIn ] = useState(!!localStorage.email.length);
  const [ modalData, setModalData ] = useState({
    hidden: true,
    email: ""
  });

  const { email, hidden } = modalData;

  const logout = () => {
    localStorage.email = "";
    setLoggedIn({ loggedIn: false });
  }

  const showLogout = () => (
    <>
      <span>You're currently logged in under {localStorage.email}.</span>
      <span className="session-btn" onClick={logout}>Log Out</span>
    </>
  )

  const showLogin = () => (
    <span className="session-btn" 
      onClick={() => setModalData({ hidden: false })}>Login</span>
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
    setModalData({ email: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.email = email;
    setModalData({ hidden: true });
    setLoggedIn({ loggedIn: true });
    
    // let Airtable = require('airtable');
    // let base = new Airtable({ apiKey: 'key0ElcLHXJqeZtUy' }).base('appx5F93ksl9EZtQt');

    // base("Login Emails").select({
    //   filterByFormula: "({Email} = '{email}')"
    // }).eachPage(function page(records, fetchNextPage) {
    //   if (records.length == 0) {
    //     console.log("Check Input");
    //   } else {
    //     console.log(200);
    //   }
    //   fetchNextPage();
    // });
  }

  return(
    <nav>

      {email}
      <div className="nav-left">
        <a href="/">
          <img src={process.env.PUBLIC_URL + '/img/techtonica_logo.png'} alt="techtonica logo" className="nav-logo"/>
        </a>
      </div>
      
      <div className="nav-right">
        { loggedIn ? showLogout() : showLogin() }
      </div>

      { hidden ? <></> : showModal() }

    </nav>
  )
}

export default withRouter(Nav);