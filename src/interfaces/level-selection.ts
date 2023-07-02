import { ReactElement } from 'react';

export interface LevelSelectionStep<T> {
  label: string;
  icon: ReactElement;
  value: T;
  color: LevelSelectionStepColors;
}

interface LevelSelectionStepColors {
  text: string;
  textOpacity: string;
  background: string;
}
