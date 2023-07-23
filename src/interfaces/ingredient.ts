import { IngredientId } from '@/enums/ingredient.ts';

export interface Ingredient {
  id: IngredientId | null;
  title: string;
  image: string;
  bgClassName: string;
  textClassName: string;
}
