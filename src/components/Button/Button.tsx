import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import '@/components/Button/Button.css';

const sizes: Record<string, string> = {
  fab: 'size-fab',
  sm: 'size-sm',
  md: 'size-md',
  lg: 'size-lg',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizes;
}

export default function Button({ size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full text-xl text-primary drop-shadow-lg transition-[filter]',
        'focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary',
        'hocus:drop-shadow-xl',
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
