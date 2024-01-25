import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type: 'text' | 'password' | 'email';
  label?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  register?: any;
}

const Input: React.FC<InputProps> = ({ type, label, placeholder, className, onChange, value, name, register, ...rest }) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.textInput} ${className || ''}`}
        onChange={onChange}
        value={value}
        {...register(name)}
        {...rest}
      />
    </div>
  );
};

export default Input;