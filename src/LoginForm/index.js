import React, { useState, useEffect } from 'react';
import './loginForm.css';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [showUsername, setShowUsername] = useState(true);
  const [showEmail, setShowEmail] = useState(true);

  const [passwordLength, setPasswordLength] = useState(true);
  const [passwordNumbers, setPasswordNumbers] = useState(true);
  const [passwordCapitals, setPasswordCapitals] = useState(true);

  const validateForm = e => {
    e.preventDefault();
    console.log('form submitted');
    if (
      !showUsername &&
      !showEmail &&
      !passwordLength &&
      !passwordNumbers &&
      !passwordCapitals
    ) {
      console.log('would send baby');
    } else {
      console.log('no no no');
    }
  };

  // Username Validation Effect
  useEffect(() => {
    if (username.length < 6) {
      setShowUsername(true);
    } else {
      setShowUsername(false);
    }
  }, [username]);

  // Email Validation Check
  useEffect(() => {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = emailRegEx.test(String(email).toLowerCase());
    if (emailValid) {
      setShowEmail(false);
    } else {
      setShowEmail(true);
    }
  }, [email]);

  // Password Validation Effect
  useEffect(() => {
    const numbers = '1234567890'.split('');
    let hasNumbers = [];

    numbers.forEach(number => hasNumbers.push(password.includes(number)));
    if (!hasNumbers.includes(true)) {
      setPasswordNumbers(true);
    } else {
      setPasswordNumbers(false);
    }

    if (password.length < 6) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }

    if (password.toLowerCase() === password) {
      setPasswordCapitals(true);
    } else {
      setPasswordCapitals(false);
    }
  }, [password]);

  return (
    <div className='container'>
      <form
        className='form'
        autoComplete='off'
        onSubmit={e => {
          validateForm(e);
        }}>
        <h3>Join the Party!</h3>
        <div className='input-group'>
          <input
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Enter Username...'
          />
          <div className='error-holder'>
            <p className={showUsername ? 'error-msg red' : 'error-msg green'}>
              Username must be at least 6 characters long
            </p>
          </div>
        </div>
        <div className='input-group'>
          <input
            autoComplete='new-password'
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Enter Email...'
          />
          <div className='error-holder'>
            <p className={showEmail ? 'error-msg red' : 'error-msg green'}>
              Please Enter Valid Email
            </p>
          </div>
        </div>
        <div className='input-group'>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Enter Password...'
          />
          <div className='error-holder'>
            <p className={passwordLength ? 'error-msg red' : 'error-msg green'}>
              Password must be at least 6 characters long
            </p>
            <p
              className={passwordNumbers ? 'error-msg red' : 'error-msg green'}>
              Password must contain at least one number
            </p>
            <p
              className={
                passwordCapitals ? 'error-msg red' : 'error-msg green'
              }>
              Password must contain at least one capital letter
            </p>
          </div>
        </div>
        <div className='input-group'>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
