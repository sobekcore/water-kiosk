import { IngredientId } from '@/enums/ingredient.ts';

export const INITIAL_VALUE: Readonly<Record<IngredientId, number>> = Object.freeze({
  [IngredientId.CUCUMBER]: 0,
  [IngredientId.MINT]: 0,
  [IngredientId.COCONUT]: 0,
  [IngredientId.NO_FLAVOR]: 0,
});
