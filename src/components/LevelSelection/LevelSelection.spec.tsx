import { Mock, beforeEach, vitest } from 'vitest';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import { mockLevelSelectionStep } from '@test/mocks/objects/level-selection.mock.tsx';
import { UnitTestException } from '@/exceptions/unit-test-exception.ts';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import LevelSelection from '@/components/LevelSelection/LevelSelection.tsx';

const MOCK_STEPS: LevelSelectionStep<number>[] = [mockLevelSelectionStep<number>(1), mockLevelSelectionStep<number>(2)];
const MOCK_INITIAL_VALUE: number = 1;
const MOCK_HANDLE_CHANGE: Mock = vitest.fn();

describe('LevelSelection', () => {
  let component: RenderResult;

  const step: LevelSelectionStep<number> | undefined = MOCK_STEPS.find(
    (step: LevelSelectionStep<number>): boolean => step.value === MOCK_INITIAL_VALUE,
  );

  if (!step) {
    throw new UnitTestException(`Could not find step LevelSelectionStep for value ${MOCK_INITIAL_VALUE}`);
  }

  beforeEach(() => {
    component = render(
      <LevelSelection steps={MOCK_STEPS} initialValue={MOCK_INITIAL_VALUE} onChange={MOCK_HANDLE_CHANGE} />,
    );
  });

  it('should render level-selection-label', () => {
    const steps: LevelSelectionStep<number>[] = [];

    const levelSelectionLabelAll: HTMLElement[] = component.getAllByTestId('level-selection-label');

    for (const levelSelectionLabel of levelSelectionLabelAll) {
      const step: LevelSelectionStep<number> | undefined = MOCK_STEPS.find(
        (step: LevelSelectionStep<number>): boolean => step.label === levelSelectionLabel.textContent,
      );

      if (step) {
        steps.push(step);
      }
    }

    expect(MOCK_STEPS.length).toEqual(steps.length);
  });

  it('should pass className attribute to level-selection-connector', () => {
    const levelSelectionConnectorAll: HTMLElement[] = component.getAllByTestId('level-selection-connector');

    for (const levelSelectionConnector of levelSelectionConnectorAll) {
      expect(levelSelectionConnector).toHaveClass(step.color.background);
    }
  });

  it('should pass className attribute to level-selection-item', () => {
    const selected: HTMLElement[] = [];

    const levelSelectionItemAll: HTMLElement[] = component.getAllByTestId('level-selection-item');

    for (const levelSelectionItem of levelSelectionItemAll) {
      if (levelSelectionItem.classList.contains('selected')) {
        selected.push(levelSelectionItem);
      }
    }

    expect(selected.length).toEqual(1);
  });

  it('should call onChange function on level-selection-button click', () => {
    let count: number = 0;

    const levelSelectionButtonAll: HTMLElement[] = component.getAllByTestId('level-selection-button');

    for (const levelSelectionButton of levelSelectionButtonAll) {
      fireEvent.click(levelSelectionButton);
      count++;
    }

    expect(MOCK_HANDLE_CHANGE).toHaveBeenCalledTimes(count);
  });
});
