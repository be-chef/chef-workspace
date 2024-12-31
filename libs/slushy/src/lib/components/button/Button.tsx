import React from 'react';
import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  variant : 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'disabled';
  size: 'small' | 'medium' | 'large' | 'xlarge';
  states : 'default' | 'hover' | 'active' | 'disabled';
  onClick?: () => void;
}>;

const Button: React.FC<ButtonProps>= ({children, variant, size, states, onClick}) => {
  const className = `btn btn-${variant} btn-${size}`;

  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;