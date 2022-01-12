import React, { useState } from 'react';

import { useAuth } from '../../context/AuthContext';

import FormButton from '../general/FormButton/FormButton';
import FormInput from '../general/FormInput/FormInput';

import './sign-in.scss';

interface IForm {
  email: string;
  password: string;
}

const formDefaultValues = { email: '', password: '' };

const SignIn = () => {
  const { handleSignInWithGoogle } = useAuth();
  const [form, setForm] = useState<IForm>(formDefaultValues);
  const { email, password } = form;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    clearFrom();
  };

  const handleSetField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e;

    setForm({ ...form, [name]: value });
  };

  const clearFrom = () => {
    setForm(formDefaultValues);
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
      <FormButton onClick={handleSignInWithGoogle} isGoogleSignIn>
        Sign In With Google
      </FormButton>
    </div>
  );
};

export default SignIn;
