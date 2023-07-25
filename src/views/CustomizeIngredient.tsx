import { useContext } from 'react';
import { INGREDIENTS, NULL_INGREDIENT, NUMBER_OF_COLUMNS } from '@/configs/ingredients.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { Ingredient } from '@/interfaces/ingredient.ts';
import { UseCurrentRouteReturn, useCurrentRoute } from '@/hooks/useCurrentRoute.ts';
import { WaterContext, WaterContextData } from '@/providers/WaterProvider.tsx';
import Logo from '@/components/Common/Logo.tsx';
import Page from '@/components/Common/Page.tsx';
import EvenGrid from '@/components/EvenGrid/EvenGrid.tsx';
import Ingredients from '@/components/Ingredients/Ingredients.tsx';
import '@/views/CustomizeIngredient.css';

export default function CustomizeIngredient() {
  const waterContext: WaterContextData | null = useContext(WaterContext);
  const currentRoute: UseCurrentRouteReturn = useCurrentRoute();

  const handleClick = (ingredient: IngredientId): void => {
    if (waterContext) {
      waterContext.setIngredient(ingredient);
    }

    currentRoute.navigate('/customize/energy');
  };

  return (
    <Page
      animation="fromFadeToLeft"
      fromPrev={currentRoute.location?.state?.from === '/customize/energy'}
      toNext={location.pathname === '/customize/energy'}
      className="flex min-h-dynamic-screen flex-col"
    >
      <EvenGrid<Ingredient>
        items={INGREDIENTS}
        nullItem={NULL_INGREDIENT}
        columns={NUMBER_OF_COLUMNS}
        renderItems={(ingredients: Ingredient[]) => (
          <Ingredients ingredients={ingredients} columns={NUMBER_OF_COLUMNS} paddingBottom onClick={handleClick} />
        )}
        className="customize-ingredients flex-1"
      />
      <div className="fixed bottom-0 h-[50px] w-full rounded-t-3xl bg-white drop-shadow-t-2xl xs:h-[70px]">
        <div className="flex h-full items-center justify-center gap-4 p-4">
          <Logo className="w-[30px]" />
          <p className="truncate text-lg">Add some flavor, or drink it plain...</p>
        </div>
      </div>
    </Page>
  );
}
