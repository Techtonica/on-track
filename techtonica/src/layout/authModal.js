import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './authModal.css';

const AuthModal = (props) => {
  const [ modalData, setModalData ] = useState({
    hidden: props.toggle,
    email: ""
  });

  const { hidden, email } = modalData;

  const handleChange = (e) => {
    setModalData({ ...modalData, email: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.email = email;
    setModalData({ ...modalData, hidden: true });
  }

  return(
    hidden ? <></> : (
      <div className="modal-container">

        <h3>Please sign in with your email.</h3>
        <form className="signin" onSubmit={handleSubmit}>

          <label>
            Email:
            <input type="email" name="email" value={email} onChange={handleChange}/>
          </label>

          <input type="submit" value="Log In" />

        </form>

      </div>
    )
  )
}

export default withRouter(AuthModal);