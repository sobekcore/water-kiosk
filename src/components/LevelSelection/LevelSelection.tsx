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

  const handleClick = (value: T): void => {
    levelSelection.setValue(value);
    onChange(value);
  };

  return (
    <div className="flex w-full items-center justify-center">
      {steps.map((step: LevelSelectionStep<T>, index: number) => (
        <Fragment key={index}>
          {index !== 0 && (
            <div
              className={clsx(
                'level-selection-connector mb-8 h-1.5 w-full max-w-[5rem]',
                levelSelection.getCurrentStep().color.background,
              )}
            ></div>
          )}
          <div
            className={clsx(
              'level-selection-item relative flex flex-col items-center pb-8',
              step.value === levelSelection.value && 'selected',
            )}
          >
            <Button size="fab" className="bg-white" onClick={() => handleClick(step.value)}>
              {step.value === levelSelection.value ? (
                <Check className="text-lg text-green" />
              ) : (
                <Plus className="text-lg text-brand-300" />
              )}
            </Button>
            <h3
              className={clsx(
                'absolute bottom-0',
                step.value === levelSelection.value ? 'text-brand-900' : 'text-gray',
              )}
            >
              {step.label}
            </h3>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
