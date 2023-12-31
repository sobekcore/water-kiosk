import { useContext } from 'react';
import { ENERGY } from '@/configs/energy.tsx';
import { INGREDIENTS } from '@/configs/ingredients.ts';
import { TEMPERATURE } from '@/configs/temperature.tsx';
import { ComponentException } from '@/exceptions/component-exception.ts';
import { EnergyValue } from '@/enums/energy.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { TemperatureValue } from '@/enums/temperature.ts';
import { Ingredient } from '@/interfaces/ingredient.ts';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import { WaterContext, WaterContextData } from '@/providers/WaterProvider.tsx';

export interface UseWaterParameterReturn {
  getIngredientParameter(): Ingredient;
  getEnergyParameter(): LevelSelectionStep<EnergyValue>;
  getTemperatureParameter(): LevelSelectionStep<TemperatureValue>;
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

    return getParameterByValue<Ingredient, IngredientId>(INGREDIENTS, waterContext.getIngredient(), 'id');
  };

  const getEnergyParameter = (): LevelSelectionStep<EnergyValue> => {
    if (!waterContext) {
      throw new ComponentException('WaterContext is not available at this component level');
    }

    return getParameterByValue<LevelSelectionStep<EnergyValue>, EnergyValue>(ENERGY, waterContext.getEnergy(), 'value');
  };

  const getTemperatureParameter = (): LevelSelectionStep<TemperatureValue> => {
    if (!waterContext) {
      throw new ComponentException('WaterContext is not available at this component level');
    }

    return getParameterByValue<LevelSelectionStep<TemperatureValue>, TemperatureValue>(
      TEMPERATURE,
      waterContext.getTemperature(),
      'value',
    );
  };

  return {
    getIngredientParameter,
    getEnergyParameter,
    getTemperatureParameter,
  };
}
