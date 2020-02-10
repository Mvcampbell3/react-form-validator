import React from 'react';
import './breakdown.css';

const Breakdown = props => {
  return (
    <div className='splash'>
      <div className='inner-splash'>
        <h1>Breakdown</h1>
        <p className='content'>
          The form on the sign up page uses React onChange events to set the values for our state inside of the form component. I used useState and useEffect hooks to manage state and run the validation checks. For username and password, the useEffect hooks would check to see if the state met certain criteria (ie. number of characters or if the state includes a number) and then set a boolean state based on if it passed validation. The email useEffect hook runs a RegEx test on the email state to see if it meets the valid email criteria. All that was left to do was give the error messages and submit button conditional class names which changed their appearance. 
        </p>
      </div>
    </div>
  );
};

export default Breakdown;
