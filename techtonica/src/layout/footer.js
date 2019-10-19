import React from 'react';
import { withRouter } from 'react-router-dom';
import './footer.css';

const Footer = () => {

  return(
    <>
      <footer>
        <a href="https://techtonica.org" target="_blank" className="foot-links">Techtonica</a>
      </footer>
    </>
  )
}

export default withRouter(Footer);
