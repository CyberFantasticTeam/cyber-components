import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button type="button" className={'cyber-button'} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
