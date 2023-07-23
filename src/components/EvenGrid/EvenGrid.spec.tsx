import { RenderResult, render } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { MockEvenGridItem } from '@test/mocks/interfaces/even-grid.mock.ts';
import { mockEvenGridItem } from '@test/mocks/objects/even-grid.mock.ts';
import MockEvenGridItems from '@test/mocks/components/EvenGrid.mock.tsx';
import EvenGrid from '@/components/EvenGrid/EvenGrid.tsx';

const MOCK_ITEMS: MockEvenGridItem[] = [mockEvenGridItem(1)];
const MOCK_NULL_ITEM: MockEvenGridItem = mockEvenGridItem(null);
const MOCK_COLUMNS: number = 1;

describe('EvenGrid', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <EvenGrid
        items={MOCK_ITEMS}
        nullItem={MOCK_NULL_ITEM}
        columns={MOCK_COLUMNS}
        renderItems={(items: MockEvenGridItem[]) => <MockEvenGridItems items={items} />}
      />,
    );
  });

  it('should render renderItems prop', () => {
    const evenGridItemAll: HTMLElement[] = component.getAllByTestId('even-grid-item');

    for (const [index, evenGridItem] of evenGridItemAll.entries()) {
      expect(evenGridItem).toHaveTextContent(MOCK_ITEMS[index].title);
    }
  });

  it('should pass style attribute to even-grid', () => {
    const evenGrid: HTMLElement = component.getByTestId('even-grid');

    expect(evenGrid).toHaveStyle({ gridTemplateColumns: `repeat(${MOCK_COLUMNS}, 1fr)` });
  });
});
