import { Mock, beforeEach, expect, vitest } from 'vitest';
import { RenderResult, cleanup, fireEvent, render } from '@testing-library/react';
import { mockCups } from '@test/mocks/objects/cups.mock.ts';
import { mockIngredient } from '@test/mocks/objects/ingredient.mock.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import { Ingredient } from '@/interfaces/ingredient.ts';
import CupsProvider from '@/providers/CupsProvider.tsx';
import Ingredients from '@/components/Ingredients/Ingredients.tsx';

const MOCK_INGREDIENTS: Ingredient[] = [mockIngredient(IngredientId.CUCUMBER), mockIngredient(IngredientId.NO_FLAVOR)];
const MOCK_NULL_INGREDIENTS: Ingredient[] = [mockIngredient(null), mockIngredient(null)];
const MOCK_COLUMNS: number = 1;
const MOCK_HANDLE_CLICK: Mock = vitest.fn();

describe('Ingredients', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <CupsProvider value={{ cups: mockCups() }}>
        <Ingredients ingredients={MOCK_INGREDIENTS} columns={MOCK_COLUMNS} onClick={MOCK_HANDLE_CLICK} />,
      </CupsProvider>,
    );
  });

  it('should render ingredient', () => {
    const ingredientAll: HTMLElement[] = component.getAllByTestId('ingredient');

    expect(ingredientAll).toHaveLength(MOCK_INGREDIENTS.length);
  });

  it('should render ingredient-padding when paddingBottom is passed', () => {
    cleanup();
    component = render(
      <CupsProvider value={{ cups: mockCups() }}>
        <Ingredients ingredients={MOCK_INGREDIENTS} columns={MOCK_COLUMNS} onClick={MOCK_HANDLE_CLICK} paddingBottom />,
      </CupsProvider>,
    );

    const ingredientPaddingAll: HTMLElement[] = component.getAllByTestId('ingredient-padding');

    expect(ingredientPaddingAll).toHaveLength(MOCK_COLUMNS);
  });

  it('should pass className attribute to ingredient-padding', () => {
    cleanup();
    component = render(
      <CupsProvider value={{ cups: mockCups() }}>
        <Ingredients ingredients={MOCK_INGREDIENTS} columns={MOCK_COLUMNS} onClick={MOCK_HANDLE_CLICK} paddingBottom />,
      </CupsProvider>,
    );

    const ingredientPaddingAll: HTMLElement[] = component.getAllByTestId('ingredient-padding');

    for (const [index, ingredientPadding] of ingredientPaddingAll.entries()) {
      expect(ingredientPadding).toHaveClass(MOCK_INGREDIENTS[index].bgClassName);
    }
  });

  it('should call onClick function on ingredient click', () => {
    const ingredientAll: HTMLElement[] = component.getAllByTestId('ingredient');

    for (const ingredient of ingredientAll) {
      fireEvent.click(ingredient);
    }

    expect(MOCK_HANDLE_CLICK).toHaveBeenCalledTimes(ingredientAll.length);
  });

  it('should not call onClick function on ingredient click when id is empty', () => {
    cleanup();
    component = render(
      <CupsProvider value={{ cups: mockCups() }}>
        <Ingredients ingredients={MOCK_NULL_INGREDIENTS} columns={MOCK_COLUMNS} onClick={MOCK_HANDLE_CLICK} />,
      </CupsProvider>,
    );

    const ingredientAll: HTMLElement[] = component.getAllByTestId('ingredient');

    for (const ingredient of ingredientAll) {
      fireEvent.click(ingredient);
    }

    expect(MOCK_HANDLE_CLICK).toHaveBeenCalledTimes(0);
  });
});
