import { Fragment } from 'react';
import clsx from 'clsx';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import { UseLevelSelectionReturn, useLevelSelection } from '@/hooks/useLevelSelection.ts';
import Button from '@/components/Button/Button.tsx';
import Check from '@/components/Icons/Check.tsx';
import Plus from '@/components/Icons/Plus.tsx';
import '@/components/LevelSelection/LevelSelection.css';

interface LevelSelectionProps<T> {
  steps: LevelSelectionStep<T>[];
  initialValue: T;
  onChange(value: T): void;
}

export default function LevelSelection<T>({ steps, initialValue, onChange }: LevelSelectionProps<T>) {
  const levelSelection: UseLevelSelectionReturn<T> = useLevelSelection<T>(steps, initialValue);

  const handleButtonClick = (value: T): void => {
    levelSelection.setValue(value);
    onChange(value);
  };

  return (
    <div className="flex w-full justify-center">
      {steps.map((step: LevelSelectionStep<T>, index: number) => (
        <Fragment key={index}>
          {index !== 0 && (
            <div
              className={clsx(
                'level-selection-connector mt-5 h-1.5 w-full max-w-[5rem]',
                levelSelection.getCurrentStep().color.background,
              )}
            ></div>
          )}
          <div
            className={clsx(
              'level-selection-item flex flex-col items-center gap-y-2',
              step.value === levelSelection.value && 'selected',
            )}
          >
            <Button size="fab" className="bg-white" onClick={() => handleButtonClick(step.value)}>
              {step.value === levelSelection.value ? (
                <Check className="h-4 w-4 text-green" />
              ) : (
                <Plus className="h-4 w-4 text-primary" />
              )}
            </Button>
            <h3 className={clsx(step.value === levelSelection.value ? 'text-secondary' : 'text-gray')}>{step.label}</h3>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
