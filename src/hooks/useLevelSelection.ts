import { useState } from 'react';
import { HookException } from '@/exceptions/hook-exception.ts';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';

export interface UseLevelSelectionReturn<T> {
  value: T;
  setValue(value: T): void;
  getCurrentStep(): LevelSelectionStep<T>;
}

export function useLevelSelection<T>(steps: LevelSelectionStep<T>[], initialValue: T): UseLevelSelectionReturn<T> {
  const [value, setValue] = useState<T>(initialValue);

  const getCurrentStep = (): LevelSelectionStep<T> => {
    const step: LevelSelectionStep<T> | undefined = steps.find(
      (step: LevelSelectionStep<T>): boolean => step.value === value,
    );

    if (!step) {
      throw new HookException(`Could not find step LevelSelectionStep for value ${value}`);
    }

    return step;
  };

  return {
    value,
    setValue,
    getCurrentStep,
  };
}
