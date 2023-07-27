import { MockEvenGridItem } from '@test/mocks/interfaces/even-grid.mock.ts';

interface MockEvenGridItemsProps {
  items: MockEvenGridItem[];
}

export default function MockEvenGridItems({ items }: MockEvenGridItemsProps) {
  return (
    <>
      {items.map((item: MockEvenGridItem, index: number) => (
        <div data-test="even-grid-item" key={index}>
          {item.title}
        </div>
      ))}
    </>
  );
}
