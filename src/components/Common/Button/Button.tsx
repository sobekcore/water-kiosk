import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import '@/components/Common/Button/Button.css';

const sizes: Record<string, string> = {
  fab: 'size-fab',
  sm: 'size-sm',
  md: 'size-md',
  lg: 'size-lg',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizes;
  defaultStyles?: boolean;
}

export default function Button({ size = 'md', defaultStyles = true, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        defaultStyles && 'rounded-full text-xl text-brand-300 drop-shadow-lg transition-[filter]',
        defaultStyles && 'hocus:drop-shadow-xl',
        'focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-300',
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
