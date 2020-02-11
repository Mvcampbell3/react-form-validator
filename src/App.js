import React, { useState } from 'react';
import './App.css';

import LoginForm from './LoginForm';
import Header from './Header';
import Landing from './Landing';
import Breakdown from './Breakdown';
import Footer from './Footer';
import Panel from './Panel';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [viewLogin, setViewLogin] = useState(false);
  const [viewLanding, setViewLanding] = useState(true);
  const [viewBreakdown, setViewBreakdown] = useState(false);

  const [displayForm, setDisplayForm] = useState(true);


  const displayLogin = () => {
    setViewLanding(false);
    setViewBreakdown(false);
    setViewLogin(true);
    setDisplayForm(true);
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
      <div className='left-ad'>
        <Panel displayForm={displayForm} />
      </div>
      {viewLogin ? <LoginForm displayForm={displayForm} setDisplayForm={setDisplayForm} /> : null}
      {viewLanding ? <Landing /> : null}
      {viewBreakdown ? <Breakdown /> : null}
      <div className='right-ad'>
        <Panel displayForm={displayForm} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
