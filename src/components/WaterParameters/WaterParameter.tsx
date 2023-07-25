import { HTMLAttributes } from 'react';

interface WaterParameterProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function WaterParameter({ title, children }: WaterParameterProps) {
  return (
    <div className="flex flex-col items-center">
      <div data-test="water-parameter-children">{children}</div>
      <h3 data-test="water-parameter-title" className="mt-3 text-brand-900">
        {title}
      </h3>
    </div>
  );
}
