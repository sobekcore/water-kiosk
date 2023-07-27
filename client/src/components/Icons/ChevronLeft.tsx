import { HTMLAttributes } from 'react';

interface ChevronLeftProps extends HTMLAttributes<HTMLDivElement> {}

export default function ChevronLeft({ ...props }: ChevronLeftProps) {
  return (
    <div {...props}>
      <svg className="icon" viewBox="0 0 320 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </div>
  );
}
