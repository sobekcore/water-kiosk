import MockIcon from '@test/mocks/components/Icon.mock.tsx';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';

export function mockLevelSelectionStep<T>(value: T): LevelSelectionStep<T> {
  return {
    label: 'Mock Label',
    value,
    icon: <MockIcon />,
    color: {
      text: 'text-white',
      textOpacity: 'text-white/40',
      background: 'bg-white',
    },
  };
}
