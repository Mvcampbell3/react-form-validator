import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header>
      <div className='brand'>Validator 3000!</div>
      <nav>
        <ul>
          <li onClick={props.displayLanding}>Why</li>
          <li>How</li>
          <li
            onClick={props.displayLogin}>
            {props.loggedIn ? 'Welcome Back' : 'Login'}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
