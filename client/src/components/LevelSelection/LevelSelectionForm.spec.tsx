import { Mock, beforeEach, vitest } from 'vitest';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import { MOCK_ICON } from '@test/mocks/components/Icon.mock.tsx';
import { mockLevelSelectionStep } from '@test/mocks/objects/level-selection.mock.tsx';
import { UnitTestException } from '@/exceptions/unit-test-exception.ts';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import LevelSelectionForm from '@/components/LevelSelection/LevelSelectionForm.tsx';

const MOCK_STEPS: LevelSelectionStep<number>[] = [mockLevelSelectionStep<number>(1), mockLevelSelectionStep<number>(2)];
const MOCK_INITIAL_VALUE: number = 1;
const MOCK_TITLE: string = 'Mock Title';
const MOCK_BUTTON: string = 'Mock Button';
const MOCK_HANDLE_CLICK_BACK: Mock = vitest.fn();
const MOCK_HANDLE_CLICK_NEXT: Mock = vitest.fn();

describe('LevelSelectionForm', () => {
  let component: RenderResult;

  const step: LevelSelectionStep<number> | undefined = MOCK_STEPS.find(
    (step: LevelSelectionStep<number>): boolean => step.value === MOCK_INITIAL_VALUE,
  );

  if (!step) {
    throw new UnitTestException(`Could not find step LevelSelectionStep for value ${MOCK_INITIAL_VALUE}`);
  }

  beforeEach(() => {
    component = render(
      <LevelSelectionForm<number>
        steps={MOCK_STEPS}
        initialValue={MOCK_INITIAL_VALUE}
        title={MOCK_TITLE}
        button={MOCK_BUTTON}
        onClickBack={MOCK_HANDLE_CLICK_BACK}
        onClickNext={MOCK_HANDLE_CLICK_NEXT}
      />,
    );
  });

  it('should render button prop', () => {
    const levelSelectionFormButton: HTMLElement = component.getByTestId('level-selection-form-button');

    expect(levelSelectionFormButton).toHaveTextContent(MOCK_BUTTON);
  });

  it('should render level-selection-form-panel', () => {
    const levelSelectionFormPanel: HTMLElement = component.getByTestId('level-selection-form-panel');

    expect(levelSelectionFormPanel).toBeInTheDocument();
  });

  it('should render level-selection-form-icon', () => {
    const levelSelectionFormIcon: HTMLElement = component.getByTestId('level-selection-form-icon');

    expect(levelSelectionFormIcon).toHaveTextContent(MOCK_ICON);
  });

  it('should render level-selection-form-label', () => {
    const levelSelectionFormLabel: HTMLElement = component.getByTestId('level-selection-form-label');

    expect(levelSelectionFormLabel).toHaveTextContent(step.label);
  });

  it('should pass className attribute to level-selection-form-circle', () => {
    const levelSelectionFormCircle: HTMLElement = component.getByTestId('level-selection-form-circle');

    expect(levelSelectionFormCircle).toHaveClass(step.color.textOpacity);
  });

  it('should pass className attribute to level-selection-form-icon', () => {
    const levelSelectionFormIcon: HTMLElement = component.getByTestId('level-selection-form-icon');

    expect(levelSelectionFormIcon).toHaveClass(step.color.text);
  });

  it('should pass className attribute to level-selection-form-label', () => {
    const levelSelectionFormLabel: HTMLElement = component.getByTestId('level-selection-form-label');

    expect(levelSelectionFormLabel).toHaveClass(step.color.text);
  });

  it('should pass className attribute to level-selection-form-next-button', () => {
    const levelSelectionFormNextButton: HTMLElement = component.getByTestId('level-selection-form-next-button');

    expect(levelSelectionFormNextButton).toHaveClass(step.color.background);
  });

  it('should call onClickBack on level-selection-form-back-button click', () => {
    const levelSelectionFormBackButton: HTMLElement = component.getByTestId('level-selection-form-back-button');
    fireEvent.click(levelSelectionFormBackButton);

    expect(MOCK_HANDLE_CLICK_BACK).toHaveBeenCalledTimes(1);
  });

  it('should call onClickNext on level-selection-form-next-button click', () => {
    const levelSelectionFormNextButton: HTMLElement = component.getByTestId('level-selection-form-next-button');
    fireEvent.click(levelSelectionFormNextButton);

    expect(MOCK_HANDLE_CLICK_NEXT).toHaveBeenCalledTimes(1);
  });
});
