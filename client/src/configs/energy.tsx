import { EnergyValue } from '@/enums/energy.ts';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import Bolt from '@/components/Icons/Bolt.tsx';

export const INITIAL_VALUE: EnergyValue = EnergyValue['1X'];

export const ENERGY: LevelSelectionStep<EnergyValue>[] = [
  {
    value: EnergyValue['1X'],
    label: '1X',
    icon: <Bolt />,
    color: {
      text: 'text-green',
      textOpacity: 'text-green/40',
      background: 'bg-green',
    },
  },
  {
    value: EnergyValue['2X'],
    label: '2X',
    icon: <Bolt />,
    color: {
      text: 'text-orange',
      textOpacity: 'text-orange/40',
      background: 'bg-orange',
    },
  },
  {
    value: EnergyValue['3X'],
    label: '3X',
    icon: <Bolt />,
    color: {
      text: 'text-red',
      textOpacity: 'text-red/40',
      background: 'bg-red',
    },
  },
];
