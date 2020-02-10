import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header>
      <div className='brand'>Validator 3000!</div>
      <nav>
        <ul>
          <li onClick={props.displayLanding}>Why</li>
          <li onClick={props.displayBreakdown}>How</li>
          <li
            onClick={props.displayLogin}>
            {props.loggedIn ? 'Welcome Back' : 'Sign Up'}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
