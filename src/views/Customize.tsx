import { INGREDIENTS, NULL_INGREDIENT, NUMBER_OF_COLUMNS } from '@/configs/ingredients.ts';
import { Ingredient } from '@/interfaces/ingredient.ts';
import Logo from '@/components/Logo.tsx';
import EvenGrid from '@/components/EvenGrid.tsx';
import Ingredients from '@/components/Ingredients/Ingredients.tsx';
import '@/views/Customize.css';

export default function Customize() {
  return (
    <div className="flex min-h-dynamic-screen flex-col">
      <EvenGrid<Ingredient>
        items={INGREDIENTS}
        nullItem={NULL_INGREDIENT}
        columns={NUMBER_OF_COLUMNS}
        renderItems={(ingredients: Ingredient[]) => (
          <Ingredients ingredients={ingredients} columns={NUMBER_OF_COLUMNS} paddingBottom />
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
