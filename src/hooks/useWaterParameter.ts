import { useContext } from 'react';
import { INGREDIENTS } from '@/configs/ingredients.ts';
import { ENERGY } from '@/configs/energy.tsx';
import { TEMPERATURE } from '@/configs/temperature.tsx';
import { ComponentException } from '@/exceptions/component-exception.ts';
import { Ingredient } from '@/interfaces/ingredient.ts';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import { WaterContextData, WaterContext } from '@/providers/WaterProvider.tsx';

export interface UseWaterParameterReturn {
  getIngredientParameter(): Ingredient;
  getEnergyParameter(): LevelSelectionStep<number>;
  getTemperatureParameter(): LevelSelectionStep<number>;
}

export function useWaterParameter(): UseWaterParameterReturn {
  const waterContext: WaterContextData | null = useContext(WaterContext);

  const getParameterByValue = <T, V>(parameters: T[], value: V | undefined, property: keyof T): T => {
    const parameter: T | undefined = parameters.find((parameter: T): boolean => {
      return parameter[property] === value;
    });

    if (!parameter) {
      throw new ComponentException(`Could not find parameter for ${value} value`);
    }

    return parameter;
  };

  const getIngredientParameter = (): Ingredient => {
    if (!waterContext) {
      throw new ComponentException('WaterContext is not available at this component level');
    }

    return getParameterByValue<Ingredient, string>(INGREDIENTS, waterContext.getIngredient(), 'id');
  };

  const getEnergyParameter = (): LevelSelectionStep<number> => {
    if (!waterContext) {
      throw new ComponentException('WaterContext is not available at this component level');
    }

    return getParameterByValue<LevelSelectionStep<number>, number>(ENERGY, waterContext.getEnergy(), 'value');
  };

  const getTemperatureParameter = (): LevelSelectionStep<number> => {
    if (!waterContext) {
      throw new ComponentException('WaterContext is not available at this component level');
    }

    return getParameterByValue<LevelSelectionStep<number>, number>(TEMPERATURE, waterContext.getTemperature(), 'value');
  };

  return {
    getIngredientParameter,
    getEnergyParameter,
    getTemperatureParameter,
  };
}
