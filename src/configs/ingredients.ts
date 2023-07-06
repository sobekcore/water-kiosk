import { Ingredient } from '@/interfaces/ingredient.ts';
import cucumber from '@/assets/cucumber.png';
import mint from '@/assets/mint.png';
import coconut from '@/assets/coconut.png';
import water from '@/assets/water.png';

export const INITIAL_VALUE: string = 'no-flavor';

export const NUMBER_OF_COLUMNS: number = 2;

export const NULL_INGREDIENT: Ingredient = {
  id: null,
  title: 'Missing',
  image: water,
  cups: 0,
  bgClassName: 'bg-water-secondary',
  textClassName: 'text-water-primary',
};

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'cucumber',
    title: 'Cucumber',
    image: cucumber,
    cups: 47,
    bgClassName: 'bg-cucumber-secondary',
    textClassName: 'text-cucumber-primary',
  },
  {
    id: 'mint',
    title: 'Mint',
    image: mint,
    cups: 190,
    bgClassName: 'bg-mint-secondary',
    textClassName: 'text-mint-primary',
  },
  {
    id: 'coconut',
    title: 'Coconut',
    image: coconut,
    cups: 89,
    bgClassName: 'bg-coconut-secondary',
    textClassName: 'text-coconut-primary',
  },
  {
    id: 'no-flavor',
    title: 'No Flavor',
    image: water,
    cups: 832,
    bgClassName: 'bg-water-secondary',
    textClassName: 'text-water-primary',
  },
];
