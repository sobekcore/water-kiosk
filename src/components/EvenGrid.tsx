import { HTMLAttributes, ReactElement, useEffect, useState } from 'react';
import clsx from 'clsx';

interface EvenGridProps<T> extends HTMLAttributes<HTMLDivElement> {
  items: T[];
  nullItem: T;
  columns: number;
  renderItems(items: T[]): ReactElement;
}

export default function EvenGrid<T>({ items, nullItem, columns, renderItems, className, ...props }: EvenGridProps<T>) {
  const [gridItems, setGridItems] = useState<T[]>([]);

  useEffect((): void => {
    const gridItems: T[] = [...items];
    const lastRowGridItems: number = gridItems.length % columns;

    if (lastRowGridItems) {
      Array.from({ length: columns - lastRowGridItems }, (): void => {
        gridItems.push(nullItem);
      });
    }

    setGridItems(gridItems);
  }, [items, nullItem, columns]);

  return (
    <div
      data-columns={columns}
      className={clsx('grid', className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${gridItems.length / columns}, 1fr) 70px`,
      }}
      {...props}
    >
      {renderItems(gridItems)}
    </div>
  );
}
