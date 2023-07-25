import { MockEvenGridItem } from '@test/mocks/interfaces/even-grid.mock.ts';

export function mockEvenGridItem(value: number | null): MockEvenGridItem {
  return {
    value,
    title: 'Mock Title',
  };
}
