import { Mock, beforeEach, vitest } from 'vitest';
import { RenderResult, cleanup, fireEvent, render } from '@testing-library/react';
import { mockCups } from '@test/mocks/objects/cups.mock.ts';
import { IngredientId } from '@/enums/ingredient.ts';
import CupsProvider from '@/providers/CupsProvider.tsx';
import Ingredient from '@/components/Ingredients/Ingredient.tsx';
import image from '@/assets/water.png';

const MOCK_ID: IngredientId = IngredientId.NO_FLAVOR;
const MOCK_CUPS: number = 1;
const MOCK_TITLE: string = 'Mock Title';
const MOCK_IMAGE: string = image;
const MOCK_BG_CLASS_NAME: string = 'bg-water-secondary';
const MOCK_TEXT_CLASS_NAME: string = 'text-water-primary';
const MOCK_HANDLE_CLICK: Mock = vitest.fn();

describe('Ingredient', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Ingredient
        id={MOCK_ID}
        title={MOCK_TITLE}
        image={MOCK_IMAGE}
        bgClassName={MOCK_BG_CLASS_NAME}
        textClassName={MOCK_TEXT_CLASS_NAME}
        onClick={MOCK_HANDLE_CLICK}
      />,
    );
  });

  it('should render title prop', () => {
    const ingredientTitle: HTMLElement = component.getByTestId('ingredient-title');

    expect(ingredientTitle).toHaveTextContent(MOCK_TITLE);
  });

  it('should render ingredient-cups', () => {
    cleanup();
    component = render(
      <CupsProvider value={{ cups: mockCups({ [MOCK_ID]: MOCK_CUPS }) }}>
        <Ingredient
          id={MOCK_ID}
          title={MOCK_TITLE}
          image={MOCK_IMAGE}
          bgClassName={MOCK_BG_CLASS_NAME}
          textClassName={MOCK_TEXT_CLASS_NAME}
          onClick={MOCK_HANDLE_CLICK}
        />
      </CupsProvider>,
    );

    const ingredientCups: HTMLElement = component.getByTestId('ingredient-cups');

    expect(ingredientCups).toHaveTextContent(`${MOCK_CUPS}`);
  });

  it('should not render ingredient-cups when id is empty', () => {
    cleanup();
    component = render(
      <Ingredient
        id={null}
        title={MOCK_TITLE}
        image={MOCK_IMAGE}
        bgClassName={MOCK_BG_CLASS_NAME}
        textClassName={MOCK_TEXT_CLASS_NAME}
        onClick={MOCK_HANDLE_CLICK}
      />,
    );

    const ingredientCups: HTMLElement | null = component.queryByTestId('ingredient-cups');

    expect(ingredientCups).not.toBeInTheDocument();
  });

  it('should pass data-id attribute to ingredient', () => {
    const ingredient: HTMLElement = component.getByTestId('ingredient');

    expect(ingredient).toHaveAttribute('data-id', MOCK_ID);
  });

  it('should pass className attribute to ingredient', () => {
    const ingredient: HTMLElement = component.getByTestId('ingredient');

    expect(ingredient).toHaveClass(MOCK_BG_CLASS_NAME);
  });

  it('should pass src attribute to ingredient-image', () => {
    const ingredientImage: HTMLElement = component.getByTestId('ingredient-image');

    expect(ingredientImage).toHaveAttribute('src', MOCK_IMAGE);
  });

  it('should pass className attribute to ingredient-title', () => {
    const ingredientTitle: HTMLElement = component.getByTestId('ingredient-title');

    expect(ingredientTitle).toHaveClass(MOCK_TEXT_CLASS_NAME);
  });

  it('should pass className attribute to ingredient-cups', () => {
    const ingredientCups: HTMLElement = component.getByTestId('ingredient-cups');

    expect(ingredientCups).toHaveClass(MOCK_TEXT_CLASS_NAME);
  });

  it('should call onClick function on ingredient click', () => {
    const ingredient: HTMLElement = component.getByTestId('ingredient');
    fireEvent.click(ingredient);

    expect(MOCK_HANDLE_CLICK).toHaveBeenCalledTimes(1);
  });
});
