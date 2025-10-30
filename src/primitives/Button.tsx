
import React from 'react';
import clsx from 'clsx';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }> = ({
  children,
  variant = 'primary',
  className,
  ...rest
}) => (
  <button
    {...rest}
    className={clsx('px-3 py-1 rounded text-sm focus-visible:ring-2', variant === 'primary' ? 'bg-primary-500 text-white' : 'bg-white border', className)}
  >
    {children}
  </button>
);
