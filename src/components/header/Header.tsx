import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../asset/crown.svg';
import { useAuth } from '../../context/AuthContext';

import './header.styles.scss';

const AuthStatus = () => {
  const { user, signOut } = useAuth();

  if (user) {
    return (
      <div className='option' onClick={() => signOut()}>
        SIGN OUT
      </div>
    );
  }

  return (
    <Link className='option' to='/sign-in-sign-up'>
      SIGN IN
    </Link>
  );
};

const Header: React.FC = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
      <span>Nahukas</span>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      <AuthStatus />
    </div>
  </div>
);

export default Header;
