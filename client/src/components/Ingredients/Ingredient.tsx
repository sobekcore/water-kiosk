import { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { IngredientId } from '@/enums/ingredient.ts';
import { UseCupsReturn, useCups } from '@/hooks/useCups.ts';
import { CupsContext, CupsContextData } from '@/providers/CupsProvider.tsx';
import GlassFilled from '@/components/Icons/GlassFilled.tsx';

interface IngredientProps {
  id: IngredientId | null;
  title: string;
  image: string;
  bgClassName: string;
  textClassName: string;
  onClick(): void;
}

export default function Ingredient({ id, title, image, bgClassName, textClassName, onClick }: IngredientProps) {
  const cupsContext: CupsContextData | null = useContext(CupsContext);
  const cups: UseCupsReturn = useCups(id);

  const [cupsCount, setCupsCount] = useState<number>(0);

  useEffect((): void => {
    if (cupsContext && id) {
      setCupsCount(cupsContext.getCups(id));
    }
  });

  return (
    <button
      data-test="ingredient"
      data-id={id}
      className={clsx(
        'ingredient flex flex-col items-center justify-center p-4',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand-300',
        !id && 'cursor-not-allowed',
        bgClassName,
      )}
      onClick={onClick}
    >
      <img data-test="ingredient-image" src={image} alt={title} className={clsx(!id && 'grayscale')} />
      <h2 data-test="ingredient-title" className={clsx('text-center text-3xl font-bold', textClassName)}>
        {title}
      </h2>
      {id && (
        <div data-test="ingredient-cups" className={clsx('flex items-center gap-1', textClassName)}>
          <GlassFilled fill={cups.getCupsPercentage()} className="text-xl" />
          <p>{cupsCount} cups today</p>
        </div>
      )}
    </button>
  );
}
