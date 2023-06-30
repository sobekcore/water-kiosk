import clsx from 'clsx';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import { UseLevelSelectionReturn, useLevelSelection } from '@/hooks/useLevelSelection.ts';
import LevelSelection from '@/components/LevelSelection/LevelSelection.tsx';
import Button from '@/components/Button/Button.tsx';
import ArrowRight from '@/components/Icons/ArrowRight.tsx';
import Bolt from '@/components/Icons/Bolt.tsx';
import ChevronLeft from '@/components/Icons/ChevronLeft.tsx';

interface LevelSelectionFormProps<T> {
  steps: LevelSelectionStep<T>[];
  initialValue: T;
  title: string;
  button: string;
  onClickBack(): void;
  onClickNext(): void;
}

export function LevelSelectionForm<T>({
  steps,
  initialValue,
  title,
  button,
  onClickBack,
  onClickNext,
}: LevelSelectionFormProps<T>) {
  const levelSelection: UseLevelSelectionReturn<T> = useLevelSelection<T>(steps, initialValue);

  const handleLevelSelectionChange = (value: T): void => {
    levelSelection.setValue(value);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-between p-4">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center justify-between gap-x-4">
        <div>
          <button className="p-4">
            <ChevronLeft className="h-8 w-8 text-secondary" onClick={onClickBack} />
          </button>
        </div>
        <h2 className="truncate text-secondary">{title}</h2>
      </div>
      <div className="flex w-full flex-col items-center gap-8 p-4">
        <div
          className={clsx(
            'flex aspect-square w-full max-w-[350px] flex-col items-center justify-center rounded-full border-8 bg-white drop-shadow-2xl',
            levelSelection.getCurrentStep().color.textOpacity,
          )}
        >
          <Bolt className={clsx('h-20 w-20', levelSelection.getCurrentStep().color.text)} />
          <div className={clsx('text-7xl font-bold', levelSelection.getCurrentStep().color.text)}>
            {levelSelection.getCurrentStep().label}
          </div>
        </div>
        <LevelSelection<T> steps={steps} initialValue={initialValue} onChange={handleLevelSelectionChange} />
      </div>
      <div className="flex w-full justify-center p-4">
        <Button className={clsx('text-white', levelSelection.getCurrentStep().color.background)} onClick={onClickNext}>
          <div className="flex items-center gap-3">
            <span className="whitespace-nowrap">{button}</span>
            <ArrowRight className="w-5" />
          </div>
        </Button>
      </div>
    </div>
  );
}
