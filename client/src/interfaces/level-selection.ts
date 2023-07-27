import { ReactElement } from 'react';

export interface LevelSelectionStep<T> {
  value: T;
  label: string;
  icon: ReactElement;
  color: LevelSelectionStepColors;
}

interface LevelSelectionStepColors {
  text: string;
  textOpacity: string;
  background: string;
}
