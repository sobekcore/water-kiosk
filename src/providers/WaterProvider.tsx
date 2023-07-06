import { ReactNode, createContext, useState } from 'react';
import { WaterParameters } from '@/interfaces/water.ts';
import { INITIAL_VALUE as INGREDIENT_INITIAL_VALUE } from '@/configs/ingredients.ts';
import { INITIAL_VALUE as ENERGY_INITIAL_VALUE } from '@/configs/energy.tsx';
import { INITIAL_VALUE as TEMPERATURE_INITIAL_VALUE } from '@/configs/temperature.tsx';

interface WaterProviderProps {
  children: ReactNode;
}

export interface WaterContextData {
  getIngredient(): string;
  getEnergy(): number;
  getTemperature(): number;
  setIngredient(ingredient: string): void;
  setEnergy(energy: number): void;
  setTemperature(temperature: number): void;
}

export const WaterContext = createContext<WaterContextData | null>(null);

export default function WaterProvider({ children }: WaterProviderProps) {
  const [parameters, setParameters] = useState<WaterParameters>({
    ingredient: INGREDIENT_INITIAL_VALUE,
    energy: ENERGY_INITIAL_VALUE,
    temperature: TEMPERATURE_INITIAL_VALUE,
  });

  const data: WaterContextData = {
    getIngredient(): string {
      return parameters.ingredient;
    },
    getEnergy(): number {
      return parameters.energy;
    },
    getTemperature(): number {
      return parameters.temperature;
    },
    setIngredient(ingredient: string): void {
      setParameters({ ...parameters, ingredient });
    },
    setEnergy(energy: number): void {
      setParameters({ ...parameters, energy });
    },
    setTemperature(temperature: number): void {
      setParameters({ ...parameters, temperature });
    },
  };

  return <WaterContext.Provider value={data} children={children} />;
}
