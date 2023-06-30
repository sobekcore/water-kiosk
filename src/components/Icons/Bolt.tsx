import { HTMLAttributes } from 'react';

interface BoltProps extends HTMLAttributes<HTMLDivElement> {}

export default function Bolt({ ...props }: BoltProps) {
  return (
    <div {...props}>
      <svg viewBox="0 0 100 100" fill="currentColor">
        <path d="M35,90L80,45L55,45L65,10L20,55L45,55Z" stroke="none"></path>
      </svg>
    </div>
  );
}
