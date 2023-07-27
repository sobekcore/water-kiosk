import clsx from 'clsx';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import { UseLevelSelectionReturn, useLevelSelection } from '@/hooks/useLevelSelection.ts';
import Button from '@/components/Common/Button/Button.tsx';
import CustomizeTopPanel from '@/components/CustomizeTopPanel/CustomizeTopPanel.tsx';
import ArrowRight from '@/components/Icons/ArrowRight.tsx';
import CircleChevronLeft from '@/components/Icons/CircleChevronLeft.tsx';
import LevelSelection from '@/components/LevelSelection/LevelSelection.tsx';

interface LevelSelectionFormProps<T> {
  steps: LevelSelectionStep<T>[];
  initialValue: T;
  title: string;
  button: string;
  onClickBack(): void;
  onClickNext(value: T): void;
}

export default function LevelSelectionForm<T>({
  steps,
  initialValue,
  title,
  button,
  onClickBack,
  onClickNext,
}: LevelSelectionFormProps<T>) {
  const levelSelection: UseLevelSelectionReturn<T> = useLevelSelection<T>(steps, initialValue);

  const handleChange = (value: T): void => {
    levelSelection.setValue(value);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-between p-4">
      <CustomizeTopPanel data-test="level-selection-form-panel" title={title}>
        <Button data-test="level-selection-form-back-button" className="p-4" onClick={onClickBack}>
          <CircleChevronLeft className="text-3xl text-brand-900" />
        </Button>
      </CustomizeTopPanel>
      <div className="flex w-full flex-col items-center gap-y-8 p-4">
        <div
          data-test="level-selection-form-circle"
          className={clsx(
            'flex aspect-square w-full max-w-[350px] flex-col items-center justify-center gap-y-4 rounded-full border-8 bg-white drop-shadow-2xl',
            levelSelection.getCurrentStep().color.textOpacity,
          )}
        >
          <div
            data-test="level-selection-form-icon"
            className={clsx('text-5xl xs:text-7xl', levelSelection.getCurrentStep().color.text)}
          >
            {levelSelection.getCurrentStep().icon}
          </div>
          <h2
            data-test="level-selection-form-label"
            className={clsx('text-5xl font-bold xs:text-7xl', levelSelection.getCurrentStep().color.text)}
          >
            {levelSelection.getCurrentStep().label}
          </h2>
        </div>
        <LevelSelection<T> steps={steps} initialValue={initialValue} onChange={handleChange} />
      </div>
      <div className="flex w-full justify-center p-4">
        <Button
          data-test="level-selection-form-next-button"
          className={clsx('text-white', levelSelection.getCurrentStep().color.background)}
          onClick={() => onClickNext(levelSelection.value)}
        >
          <div className="flex items-center gap-x-3">
            <span data-test="level-selection-form-button" className="whitespace-nowrap">
              {button}
            </span>
            <ArrowRight className="w-5" />
          </div>
        </Button>
      </div>
    </div>
  );
}
