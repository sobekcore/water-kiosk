import { useContext } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { INGREDIENTS, NULL_INGREDIENT, NUMBER_OF_COLUMNS } from '@/configs/ingredients.ts';
import { Ingredient } from '@/interfaces/ingredient.ts';
import { WaterContextData, WaterContext } from '@/providers/WaterProvider.tsx';
import Logo from '@/components/Svg/Logo.tsx';
import EvenGrid from '@/components/EvenGrid/EvenGrid.tsx';
import Ingredients from '@/components/Ingredients/Ingredients.tsx';
import '@/views/CustomizeIngredient.css';

export default function CustomizeIngredient() {
  const navigate: NavigateFunction = useNavigate();
  const waterContext: WaterContextData | null = useContext(WaterContext);

  const handleClick = (ingredient: string): void => {
    if (waterContext) {
      waterContext.setIngredient(ingredient);
    }

    navigate('/customize/energy');
  };

  return (
    <div className="flex min-h-dynamic-screen flex-col">
      <EvenGrid<Ingredient>
        items={INGREDIENTS}
        nullItem={NULL_INGREDIENT}
        columns={NUMBER_OF_COLUMNS}
        renderItems={(ingredients: Ingredient[]) => (
          <Ingredients ingredients={ingredients} columns={NUMBER_OF_COLUMNS} paddingBottom onClick={handleClick} />
        )}
        className="ingredients flex-1"
      />
      <div className="fixed bottom-0 h-[50px] w-full rounded-t-3xl bg-white drop-shadow-t-2xl xs:h-[70px]">
        <div className="flex h-full items-center justify-center gap-4 p-4">
          <Logo className="w-[30px]" />
          <p className="truncate text-lg">Add some flavor, or drink it plain...</p>
        </div>
      </div>
    </div>
  );
}
