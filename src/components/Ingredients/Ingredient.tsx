import clsx from 'clsx';

interface IngredientTileProps {
  id: string | null;
  title: string;
  image: string;
  cups: number;
  bgClassName: string;
  textClassName: string;
  onClick(): void;
}

export default function Ingredient({
  id,
  title,
  image,
  cups,
  bgClassName,
  textClassName,
  onClick,
}: IngredientTileProps) {
  return (
    <button
      data-id={id}
      className={clsx(
        'ingredient flex flex-col items-center justify-center p-4',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-brand-300',
        bgClassName,
      )}
      onClick={onClick}
    >
      <img src={image} alt={title} />
      <h2 className={clsx('text-center text-3xl font-bold', textClassName)}>{title}</h2>
      <p className={clsx('text-center', textClassName)}>{cups} cups today</p>
    </button>
  );
}
