import { ReactNode, createContext, useState } from 'react';
import { INITIAL_VALUE as ENERGY_INITIAL_VALUE } from '@/configs/energy.tsx';
import { INITIAL_VALUE as INGREDIENT_INITIAL_VALUE } from '@/configs/ingredients.ts';
import { INITIAL_VALUE as TEMPERATURE_INITIAL_VALUE } from '@/configs/temperature.tsx';
import { EnergyValue } from '@/enums/energy.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { StorageKey } from '@/enums/storage.ts';
import { TemperatureValue } from '@/enums/temperature.ts';
import { Storage } from '@/interfaces/storage.ts';
import { WaterState } from '@/interfaces/water.ts';
import { useStorage } from '@/hooks/useStorage.ts';

export interface WaterProviderProps {
  children: ReactNode;
  value?: Partial<WaterState>;
}

export interface WaterContextData {
  getIngredient(): IngredientId;
  getEnergy(): EnergyValue;
  getTemperature(): TemperatureValue;
  setIngredient(ingredient: IngredientId): void;
  setEnergy(energy: EnergyValue): void;
  setTemperature(temperature: TemperatureValue): void;
  clearIngredient(): void;
  clearEnergy(): void;
  clearTemperature(): void;
  clear(): void;
}

export const WaterContext = createContext<WaterContextData | null>(null);

export default function WaterProvider({ children, value = {} }: WaterProviderProps) {
  const storage: Storage = useStorage();

  const [state, setState] = useState<WaterState>({
    ingredient: storage.get<IngredientId>(StorageKey.INGREDIENT) ?? INGREDIENT_INITIAL_VALUE,
    energy: storage.get<EnergyValue>(StorageKey.ENERGY) ?? ENERGY_INITIAL_VALUE,
    temperature: storage.get<TemperatureValue>(StorageKey.TEMPERATURE) ?? TEMPERATURE_INITIAL_VALUE,
    ...value,
  });

  const data: WaterContextData = {
    getIngredient(): IngredientId {
      return state.ingredient;
    },
    getEnergy(): EnergyValue {
      return state.energy;
    },
    getTemperature(): TemperatureValue {
      return state.temperature;
    },
    setIngredient(ingredient: IngredientId): void {
      setState({ ...state, ingredient });
      storage.set(StorageKey.INGREDIENT, ingredient);
    },
    setEnergy(energy: EnergyValue): void {
      setState({ ...state, energy });
      storage.set(StorageKey.ENERGY, energy);
    },
    setTemperature(temperature: TemperatureValue): void {
      setState({ ...state, temperature });
      storage.set(StorageKey.TEMPERATURE, temperature);
    },
    clearIngredient(): void {
      setState({ ...state, ingredient: INGREDIENT_INITIAL_VALUE });
      storage.remove(StorageKey.INGREDIENT);
    },
    clearEnergy(): void {
      setState({ ...state, energy: ENERGY_INITIAL_VALUE });
      storage.remove(StorageKey.ENERGY);
    },
    clearTemperature(): void {
      setState({ ...state, temperature: TEMPERATURE_INITIAL_VALUE });
      storage.remove(StorageKey.TEMPERATURE);
    },
    clear(): void {
      data.clearIngredient();
      data.clearEnergy();
      data.clearTemperature();
    },
  };

  return <WaterContext.Provider value={data} children={children} />;
}
