import React, { useState } from 'react';
import './App.css';

import LoginForm from './LoginForm';
import Header from './Header';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [viewLogin, setViewLogin] = useState(false);

  return (
    <div className='container'>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setViewLogin={setViewLogin} />
      {viewLogin ? <LoginForm /> : null}
    </div>
  );
}

export default App;
