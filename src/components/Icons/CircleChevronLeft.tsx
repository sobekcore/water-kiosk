import { HTMLAttributes } from 'react';

interface CircleChevronLeftProps extends HTMLAttributes<HTMLDivElement> {}

export default function CircleChevronLeft({ ...props }: CircleChevronLeftProps) {
  return (
    <div {...props}>
      <svg className="icon" viewBox="0 0 512 512">
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
      </svg>
    </div>
  );
}
