import { beforeEach } from 'vitest';
import { RenderHookResult, renderHook } from '@testing-library/react';
import { EnergyValue } from '@/enums/energy.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { TemperatureValue } from '@/enums/temperature.ts';
import { UseWaterParameterReturn, useWaterParameter } from '@/hooks/useWaterParameter.ts';
import { WaterProviderProps } from '@/providers/WaterProvider.tsx';
import WaterProvider from '@/providers/WaterProvider.tsx';

const MOCK_INGREDIENT: IngredientId = IngredientId.NO_FLAVOR;
const MOCK_ENERGY: EnergyValue = EnergyValue['1X'];
const MOCK_TEMPERATURE: TemperatureValue = TemperatureValue.ROOM;

function wrapper({ children }: WaterProviderProps) {
  return (
    <WaterProvider value={{ ingredient: MOCK_INGREDIENT, energy: MOCK_ENERGY, temperature: MOCK_TEMPERATURE }}>
      {children}
    </WaterProvider>
  );
}

describe('useWaterParameter', () => {
  let hook: RenderHookResult<UseWaterParameterReturn, never>;

  beforeEach(() => {
    hook = renderHook(() => useWaterParameter(), { wrapper });
  });

  it('should return proper value from getIngredientParameter', () => {
    expect(hook.result.current.getIngredientParameter().id).toEqual(MOCK_INGREDIENT);
  });

  it('should return proper value from getEnergyParameter', () => {
    expect(hook.result.current.getEnergyParameter().value).toEqual(MOCK_ENERGY);
  });

  it('should return proper value from getTemperatureParameter', () => {
    expect(hook.result.current.getTemperatureParameter().value).toEqual(MOCK_TEMPERATURE);
  });
});
