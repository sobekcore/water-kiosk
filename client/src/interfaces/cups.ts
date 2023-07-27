import { IngredientId } from '@/enums/ingredient.ts';

export interface CupsState {
  lastDate: Date;
  cups: Record<IngredientId, number>;
}
