import { IngredientId } from '@/enums/ingredient';

export function mockCups(cups?: Partial<Record<IngredientId, number>>): Record<IngredientId, number> {
  return {
    [IngredientId.CUCUMBER]: 0,
    [IngredientId.MINT]: 0,
    [IngredientId.COCONUT]: 0,
    [IngredientId.NO_FLAVOR]: 0,
    ...cups,
  };
}
