import React from 'react';

const Landing = props => {
  return (
    <div className='splash'>
      <div className='landing inner-splash'>
        <h1>Why</h1>
        <p className='content'>
          Like many things that have to do with coding, the form-validation
          process is exactly as intricate as you want to make it. You can have
          the inputs pass directly to your server without any client side
          validation, which is not a great idea. You could just slap some HTML5
          requried tags on to your form inputs, but that just seems kind of lazy.
          The sign in form here lets the user know if they have met the criteria
          for each input. The submit button will only send information to the
          server is all of the criteria of the form is met. This is the way.
        </p>
      </div>
    </div>
  );
};

export default Landing;
