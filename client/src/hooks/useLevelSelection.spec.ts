import { beforeEach, describe } from 'vitest';
import { RenderHookResult, act, renderHook } from '@testing-library/react';
import { mockLevelSelectionStep } from '@test/mocks/objects/level-selection.mock.tsx';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import { UseLevelSelectionReturn, useLevelSelection } from '@/hooks/useLevelSelection.ts';

const MOCK_STEPS: LevelSelectionStep<number>[] = [mockLevelSelectionStep<number>(1), mockLevelSelectionStep<number>(2)];
const MOCK_INITIAL_VALUE: number = 1;
const MOCK_CHANGE_VALUE: number = 2;

describe('useLevelSelection', () => {
  let hook: RenderHookResult<
    UseLevelSelectionReturn<number>,
    { steps: LevelSelectionStep<number>; initialValue: number }
  >;

  beforeEach(() => {
    hook = renderHook(() => useLevelSelection(MOCK_STEPS, MOCK_INITIAL_VALUE));
  });

  it('should change value', () => {
    act(() => {
      hook.result.current.setValue(MOCK_CHANGE_VALUE);
    });

    expect(hook.result.current.value).toEqual(MOCK_CHANGE_VALUE);
  });

  it('should return current step', () => {
    act(() => {
      hook.result.current.setValue(MOCK_CHANGE_VALUE);
    });

    expect(hook.result.current.getCurrentStep().value).toEqual(MOCK_CHANGE_VALUE);
  });
});
