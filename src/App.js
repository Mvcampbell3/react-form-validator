import React, { useState } from 'react';
import './App.css';

import LoginForm from './LoginForm';
import Header from './Header';
import Landing from './Landing';
import Breakdown from './Breakdown';
import Footer from './Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [viewLogin, setViewLogin] = useState(false);
  const [viewLanding, setViewLanding] = useState(true);
  const [viewBreakdown, setViewBreakdown] = useState(false);

  const displayLogin = () => {
    setViewLanding(false);
    setViewBreakdown(false);
    setViewLogin(true);
  };

  const displayLanding = () => {
    setViewLogin(false);
    setViewBreakdown(false);
    setViewLanding(true);
  };

  const displayBreakdown = () => {
    setViewLanding(false);
    setViewLogin(false);
    setViewBreakdown(true);
  };

  return (
    <div className='container'>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        displayLogin={displayLogin}
        displayLanding={displayLanding}
        displayBreakdown={displayBreakdown}
      />
      <div className='left-ad'></div>
      {viewLogin ? <LoginForm /> : null}
      {viewLanding ? <Landing /> : null}
      {viewBreakdown ? <Breakdown /> : null}
      <div className='right-ad'></div>
      <Footer />
    </div>
  );
}

export default App;
