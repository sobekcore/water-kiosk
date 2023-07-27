import { HTMLAttributes } from 'react';

interface CustomizeTopPanelProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function CustomizeTopPanel({ title, children, ...props }: CustomizeTopPanelProps) {
  return (
    <div className="grid min-h-[4rem] w-full grid-cols-[1fr_auto_1fr] items-center justify-between gap-x-4" {...props}>
      <div data-test="customize-top-panel-children">{children}</div>
      <h1 data-test="customize-top-panel-title" className="truncate text-brand-900">
        {title}
      </h1>
    </div>
  );
}
