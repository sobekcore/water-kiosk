import image from '@test/mocks/assets/image.mock.png';
import { IngredientId } from '@/enums/ingredient.ts';
import { Ingredient } from '@/interfaces/ingredient.ts';

export function mockIngredient(id: IngredientId | null): Ingredient {
  return {
    id,
    title: 'Mock Title',
    image: image,
    bgClassName: 'bg-white',
    textClassName: 'text-white',
  };
}
