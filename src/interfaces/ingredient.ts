import { IngredientId } from '@/enums/ingredient.ts';

export interface Ingredient {
  id: IngredientId | null;
  title: string;
  image: string;
  cups: number;
  bgClassName: string;
  textClassName: string;
}
