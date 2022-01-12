import React from 'react';

import './form-button.scss';

interface FormButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  isGoogleSignIn?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({
  children,
  type,
  onClick,
  isGoogleSignIn
}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default FormButton;
