import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../api/firebase.utils';
import { UserService } from '../../api/Users/UserService';
import FormButton from '../general/FormButton/FormButton';

import FormInput from '../general/FormInput/FormInput';

import './sign-up.scss';

interface IForm {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const formDefaultValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUp: React.FC = () => {
  const [form, setForm] = useState<IForm>(formDefaultValues);
  const { displayName, email, password, confirmPassword } = form;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    const { password, confirmPassword } = form;
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await UserService.storeUser({ ...user, displayName });
    } catch (error) {
      console.error(error);
    }

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
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span className=''>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleSetField}
          name='displayName'
          type='text'
          value={displayName}
          label='display Name'
          required
        />
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
        <FormInput
          handleChange={handleSetField}
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          label='confirm password'
          required
        />
        <FormButton type='submit'>Sign up</FormButton>
      </form>
    </div>
  );
};

export default SignUp;
