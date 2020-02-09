import React from 'react';

const Landing = props => {
  return (
    <div className='landing splash'>
      <h1 className='text-center'>Why</h1>

      <hr />

      <section>
        <h3 className='section-title'>As difficult as you want to make it</h3>
        <p className='content'>
          Like many things that have to do with coding, making some
          form-validation process is exactly as difficult as you want to make
          it. You can plug some HTML5 required tags on your inputs and call it a
          day. You can just let the back-end guys and gals take care of the
          heavy lifting and not do any client-side validation. You can also make
          a validation system which makes it clear to the user what type of
          values are accepted, feedback for where the user needs to make some
          adjustments, and finally let the user know when they do a good job.
          Obviously, the last option is the best option.
        </p>
      </section>
    </div>
  );
};

export default Landing;
