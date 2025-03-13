import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'filled';
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, children, variant = 'filled', ...otherProps } = props;

  const buttonClasses = clsx(
    'px-4 py-2 rounded-md transition-colors duration-200',
    {
      'bg-green-600 text-white': variant === 'filled',
    },
    className,
  );

  return (
    <button type="button" className={buttonClasses} {...otherProps}>
      {children}
    </button>
  );
};
