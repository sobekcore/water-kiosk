import { useContext } from 'react';
import { ComponentException } from '@/exceptions/component-exception.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { CupsContext, CupsContextData } from '@/providers/CupsProvider.tsx';

export interface UseCupsReturn {
  getCupsPercentage(): number;
}

export function useCups(ingredient: IngredientId | null): UseCupsReturn {
  const cupsContext: CupsContextData | null = useContext(CupsContext);

  const getCupsPercentage = (): number => {
    if (!cupsContext) {
      throw new ComponentException('CupsContext is not available at this component level');
    }

    if (!ingredient) {
      return 0;
    }

    const count: number = cupsContext.getCups(ingredient);
    const max: number = Math.max(...Object.values(cupsContext.getAllCups()));

    return Math.round((100 * count) / max);
  };

  return {
    getCupsPercentage,
  };
}
