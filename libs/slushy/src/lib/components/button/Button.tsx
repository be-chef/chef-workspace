import React from 'react';
import { CSSProperties, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  variant : 'primary' | 'secondary' | 'danger' | 'sucess' | 'warning' | 'info' | 'disabled';
  size: 'sm' | 'md' | 'lg' | 'xlg';
  states : 'default' | 'hover' | 'active' | 'disabled';
  onClick?: () => void;
}>;

const Button: React.FC<ButtonProps>= ({children, variant, size, states, onClick}) => {
  const className = `button ${variant} ${size}`;

  const style: CSSProperties = {
    padding: size === 'sm' ? '8px 12px' : size === 'md' ? '12px 16px' : '16px 20px',
    backgroundColor: variant === 'primary' ? 'var(--blue-500)' : 'var(--grey-700)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
}

export default Button;