import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

const sizes: Record<string, string> = {
  sm: 'px-4 py-2',
  md: 'px-12 py-3',
  lg: 'px-24 py-4',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizes;
}

export default function Button({ size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full bg-white text-xl text-primary drop-shadow-lg transition-[transform,filter] hocus:-translate-y-1 hocus:drop-shadow-2xl',
        className,
        sizes[size],
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
