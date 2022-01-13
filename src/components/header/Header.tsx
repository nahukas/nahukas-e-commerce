import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../asset/crown.svg';
import { useAuth } from '../../context/AuthContext';
import CartDropdown from '../CartDropdown/CartDropDown';
import CartIcon from '../CartIcon/CartIcon';

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

const Header: React.FC = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        <AuthStatus />
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

export default Header;
