import React from 'react';

import './form-input.scss';

interface FromInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  value: string;
  label?: string;
  required?: boolean;
}

const FormInput: React.FC<FromInputProps> = ({
  handleChange,
  name,
  type,
  value,
  label,
  required
}) => (
  <div className='group'>
    <input
      className='form-input'
      onChange={(e) => handleChange(e)}
      type={type}
      name={name}
      value={value}
      required={required}
    />
    {label && (
      <label
        className={`${value.length ? 'shrink' : ''} form-input-label`}
        htmlFor={name}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
