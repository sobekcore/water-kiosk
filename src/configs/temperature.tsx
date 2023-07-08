import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import GlassWater from '@/components/Icons/GlassWater.tsx';
import GlassWaterChilled from '@/components/Icons/GlassWaterChilled.tsx';
import GlassWaterCold from '@/components/Icons/GlassWaterCold.tsx';

export const INITIAL_VALUE: number = 20;

export const TEMPERATURE: LevelSelectionStep<number>[] = [
  {
    label: 'Room',
    icon: <GlassWater />,
    value: 20,
    color: {
      text: 'text-brand-300',
      textOpacity: 'text-brand-300/40',
      background: 'bg-brand-300',
    },
  },
  {
    label: 'Chilled',
    icon: <GlassWaterChilled />,
    value: 10,
    color: {
      text: 'text-brand-300',
      textOpacity: 'text-brand-300/40',
      background: 'bg-brand-300',
    },
  },
  {
    label: 'Cold',
    icon: <GlassWaterCold />,
    value: 3,
    color: {
      text: 'text-brand-300',
      textOpacity: 'text-brand-300/40',
      background: 'bg-brand-300',
    },
  },
];
