import { LevelSelectionStep } from '@/interfaces/level-selection.ts';

export const INITIAL_VALUE: number = 1;

export const ENERGY: LevelSelectionStep<number>[] = [
  {
    label: '1X',
    value: 1,
    color: {
      text: 'text-green',
      textOpacity: 'text-green/40',
      background: 'bg-green',
    },
  },
  {
    label: '2X',
    value: 2,
    color: {
      text: 'text-orange',
      textOpacity: 'text-orange/40',
      background: 'bg-orange',
    },
  },
  {
    label: '3X',
    value: 3,
    color: {
      text: 'text-red',
      textOpacity: 'text-red/40',
      background: 'bg-red',
    },
  },
];
