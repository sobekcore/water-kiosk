import { NavigateFunction, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

interface IngredientTileProps {
  id: string | null;
  title: string;
  image: string;
  cups: number;
  bgClassName: string;
  textClassName: string;
}

export default function Ingredient({ id, title, image, cups, bgClassName, textClassName }: IngredientTileProps) {
  const navigate: NavigateFunction = useNavigate();

  const handleButtonClick = (): void => {
    navigate(`/customize/${id}/energy`);
  };

  return (
    <button
      data-id={id}
      className={clsx('ingredient flex flex-col items-center justify-center p-4', bgClassName)}
      onClick={handleButtonClick}
    >
      <img src={image} alt={title} />
      <h2 className={clsx('text-center text-3xl font-bold', textClassName)}>{title}</h2>
      <p className={clsx('text-center', textClassName)}>{cups} cups today</p>
    </button>
  );
}
