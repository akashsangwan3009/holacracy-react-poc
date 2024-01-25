import React from 'react';
import styles from './Button.module.css'

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type, ...rest }) => {
  return (
    <button
      type={type || 'submit'}
      className={styles.submitButton}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;