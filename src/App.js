import React, { useState } from 'react';
import './App.css';

import LoginForm from './LoginForm';
import Header from './Header';
import Landing from './Landing';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [viewLogin, setViewLogin] = useState(false);
  const [viewLanding, setViewLanding] = useState(true);

  const displayLogin = () => {
    setViewLanding(false);
    setViewLogin(true);
  }

  const displayLanding = () => {
    setViewLogin(false);
    setViewLanding(true)
  }

  return (
    <div className='container'>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        displayLogin={displayLogin}
        displayLanding={displayLanding}
      />
      {viewLogin ? <LoginForm /> : null}
      {viewLanding ? <Landing /> : null}
    </div>
  );
}

export default App;
