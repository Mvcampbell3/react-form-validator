import React, { useState } from 'react';
import './App.css';

import LoginForm from './LoginForm';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const validateForm = e => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <div className='App'>
      <LoginForm 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
        validateForm={validateForm}
      />
    </div>
  );
}

export default App;
