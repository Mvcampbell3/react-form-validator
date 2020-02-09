import React from 'react';
import './loginForm.css';

const LoginForm = props => {
  return (
    <form
      autoComplete='off'
      onSubmit={e => {
        props.validateForm(e);
      }}>
      <h3>Join the Party!</h3>
      <div className='input-group'>
        <input
          type='text'
          value={props.username}
          onChange={e => props.setUsername(e.target.value)}
          placeholder='Enter Username...'
        />
        <div className="error-holder">
          <p className='error-msg'>Username must be at least 6 characters long</p>
        </div>
      </div>
      <div className='input-group'>
        <input
          autoComplete='new-password'
          type='text'
          value={props.email}
          onChange={e => props.setEmail(e.target.value)}
          placeholder='Enter Email...'
        />
        <div className="error-holder">
          <p className="error-msg">Please Enter Valid Email</p>
        </div>
      </div>
      <div className='input-group'>
        <input
          type='password'
          value={props.password}
          onChange={e => props.setPassword(e.target.value)}
          placeholder='Enter Password...'
        />
        <div className="error-holder">
          <p className="error-msg">Password must be at least 6 characters long</p>
          <p className="error-msg">Password must contain at least one number</p>
          <p className="error-msg">Password must contain at least one capital letter</p>
        </div>
      </div>
      <div className='input-group'>
        <input type='submit' value='Submit' />
      </div>
    </form>
  );
};

export default LoginForm;
