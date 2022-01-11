import React, { useState } from 'react';
import FormButton from '../general/FormButton/FormButton';

import FormInput from '../general/FormInput/FormInput';

import './sign-in.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    clearFrom();
  };

  const handleSetField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const clearFrom = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleSetField}
          name='email'
          type='email'
          value={email}
          label='email'
          required
        />
        <FormInput
          handleChange={handleSetField}
          name='password'
          type='password'
          value={password}
          label='password'
          required
        />
        <FormButton type='submit'>Sign In</FormButton>
      </form>
    </div>
  );
};

export default SignIn;
