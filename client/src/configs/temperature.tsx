import { TemperatureValue } from '@/enums/temperature.ts';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import GlassWater from '@/components/Icons/GlassWater.tsx';
import GlassWaterChilled from '@/components/Icons/GlassWaterChilled.tsx';
import GlassWaterCold from '@/components/Icons/GlassWaterCold.tsx';

export const INITIAL_VALUE: TemperatureValue = TemperatureValue.ROOM;

export const TEMPERATURE: LevelSelectionStep<TemperatureValue>[] = [
  {
    value: TemperatureValue.ROOM,
    label: 'Room',
    icon: <GlassWater />,
    color: {
      text: 'text-brand-300',
      textOpacity: 'text-brand-300/40',
      background: 'bg-brand-300',
    },
  },
  {
    value: TemperatureValue.CHILLED,
    label: 'Chilled',
    icon: <GlassWaterChilled />,
    color: {
      text: 'text-brand-300',
      textOpacity: 'text-brand-300/40',
      background: 'bg-brand-300',
    },
  },
  {
    value: TemperatureValue.COLD,
    label: 'Cold',
    icon: <GlassWaterCold />,
    color: {
      text: 'text-brand-300',
      textOpacity: 'text-brand-300/40',
      background: 'bg-brand-300',
    },
  },
];
