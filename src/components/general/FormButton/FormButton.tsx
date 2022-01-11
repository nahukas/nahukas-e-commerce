import React from 'react';

import './form-button.scss';

interface FormButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
}

const FormButton: React.FC<FormButtonProps> = ({ type, children }) => (
  <button className='custom-button' type={type}>
    {children}
  </button>
);

export default FormButton;
