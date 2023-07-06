import { HTMLAttributes } from 'react';

interface WaterParameterProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function WaterParameter({ title, children }: WaterParameterProps) {
  return (
    <div className="flex flex-col items-center">
      <div>{children}</div>
      <h3 className="mt-3 text-secondary">{title}</h3>
    </div>
  );
}
