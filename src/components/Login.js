import React, { useState } from 'react';
import Header from './Header';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    if (isSignInForm) {
      setIsSignInForm(false);
    } else {
      setIsSignInForm(true);
    }
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg'
          alt=''
        />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign up'}
        </h1>
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-700'
          />
        )}
        <input
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700'
        />

        <button className=' p-4 my-6 bg-red-700 w-full rounded-lg'>
          {isSignInForm ? 'Sign In' : 'Sign up'}
        </button>

        <p className='cursor-pointer' onClick={() => toggleSignInForm()}>
          {isSignInForm
            ? 'New to Netflix?Sign up now.'
            : 'Already registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
