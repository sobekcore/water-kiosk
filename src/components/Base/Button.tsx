import { ReactNode } from 'react';
import clsx from 'clsx';

const sizes: Record<string, string> = {
  sm: 'px-4 py-2',
  md: 'px-12 py-3',
  lg: 'px-24 py-4',
};

interface ButtonProps {
  size?: keyof typeof sizes;
  children: ReactNode;
}

export default function Button({ size = 'md', children }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-full bg-white text-primary drop-shadow-lg transition-[transform,filter] hocus:-translate-y-1 hocus:drop-shadow-2xl',
        sizes[size],
      )}
    >
      {children}
    </button>
  );
}
