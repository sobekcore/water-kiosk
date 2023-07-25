import { EnergyValue } from '@/enums/energy.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { TemperatureValue } from '@/enums/temperature.ts';

export interface WaterState {
  ingredient: IngredientId;
  energy: EnergyValue;
  temperature: TemperatureValue;
}
