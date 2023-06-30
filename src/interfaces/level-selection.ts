export interface LevelSelectionStep<T> {
  label: string;
  value: T;
  color: LevelSelectionStepColors;
}

interface LevelSelectionStepColors {
  text: string;
  textOpacity: string;
  background: string;
}
