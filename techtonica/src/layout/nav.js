import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './nav.css';
import AuthModal from './authModal';

const Nav = () => {

  const [ userData, setUserData ] = useState({
    email: localStorage.email
  });

  const { email } = userData;

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e){
    e.preventDefault();

    let Airtable = require('airtable');
    let base = new Airtable({apiKey: 'key0ElcLHXJqeZtUy'}).base('appx5F93ksl9EZtQt');

    base("Login Emails").select({
      filterByFormula: "({Email} = '{email}')"
    }).eachPage(function page(records, fetchNextPage) {
      if (records.length == 0) {
        console.log("Check Input");
      } else {
        console.log(200);
      }
      fetchNextPage();
    });
  }
  

  return(
    <>
      <nav>
        <div className="nav-left">
          <a href="/">
            <img src={process.env.PUBLIC_URL + '/img/techtonica_logo.png'} alt="techtonica logo" className="nav-logo"/>
          </a>
        </div>
        <div className="nav-right">
          <a href="/studentSubmission/:topic">Login</a>
          <form className="student-form" onSubmit={handleSubmit}>
            <input className="url-input" id="email" type="email" name="email" value={email} onChange={handleChange} />
            <input className="button-input" type="submit" value="submit" />
          </form>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Nav);