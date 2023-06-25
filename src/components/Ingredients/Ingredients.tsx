import clsx from 'clsx';
import { Ingredient } from '@/interfaces/ingredient.ts';
import IngredientComponent from '@/components/Ingredients/Ingredient.tsx';

interface IngredientsProps {
  ingredients: Ingredient[];
  columns: number;
  paddingBottom?: boolean;
}

export default function Ingredients({ ingredients, columns, paddingBottom = false }: IngredientsProps) {
  let hasBaseClass: boolean = false;

  return (
    <>
      {ingredients.map((ingredient: Ingredient, index: number) => (
        <IngredientComponent
          key={index}
          id={ingredient.id}
          title={ingredient.title}
          image={ingredient.image}
          cups={ingredient.cups}
          bgClassName={ingredient.bgClassName}
          textClassName={ingredient.textClassName}
        />
      ))}
      {paddingBottom &&
        Array.from({ length: columns }, (_: unknown, index: number) => {
          const ingredient: Ingredient = ingredients[ingredients.length - (index + 1)];

          if (!ingredient) {
            return;
          }

          return (
            <div
              key={index}
              data-id={ingredient.id}
              className={clsx(
                'ingredient-padding h-[50px] xs:h-[70px]',
                ingredient.id && !hasBaseClass && (hasBaseClass = true) && 'base',
                ingredient.bgClassName,
              )}
            ></div>
          );
        }).reverse()}
    </>
  );
}
