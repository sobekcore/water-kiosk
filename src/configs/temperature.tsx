import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import GlassWater from '@/components/Icons/GlassWater.tsx';
import GlassWaterChilled from '@/components/Icons/GlassWaterChilled.tsx';
import GlassWaterCold from '@/components/Icons/GlassWaterCold.tsx';

export const INITIAL_VALUE: string = 'room';

export const TEMPERATURE: LevelSelectionStep<string>[] = [
  {
    label: 'Room',
    icon: <GlassWater />,
    value: 'room',
    color: {
      text: 'text-primary',
      textOpacity: 'text-primary/40',
      background: 'bg-primary',
    },
  },
  {
    label: 'Chilled',
    icon: <GlassWaterChilled />,
    value: 'chilled',
    color: {
      text: 'text-primary',
      textOpacity: 'text-primary/40',
      background: 'bg-primary',
    },
  },
  {
    label: 'Cold',
    icon: <GlassWaterCold />,
    value: 'cold',
    color: {
      text: 'text-primary',
      textOpacity: 'text-primary/40',
      background: 'bg-primary',
    },
  },
];
