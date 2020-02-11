import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header>
      <div className='brand'>Validator 3000!</div>
      <nav>
        <ul>
          <li className={props.viewLogin ? 'active': null} onClick={props.displayLogin}>Sign Up</li>
          <li className={props.viewLanding ? 'active': null} onClick={props.displayLanding}>Why</li>
          <li className={props.viewBreakdown ? 'active': null} onClick={props.displayBreakdown}>How</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
