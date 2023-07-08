import clsx from 'clsx';
import { LevelSelectionStep } from '@/interfaces/level-selection.ts';
import { UseLevelSelectionReturn, useLevelSelection } from '@/hooks/useLevelSelection.ts';
import CustomizeTopPanel from '@/components/CustomizeTopPanel/CustomizeTopPanel.tsx';
import LevelSelection from '@/components/LevelSelection/LevelSelection.tsx';
import Button from '@/components/Button/Button.tsx';
import ArrowRight from '@/components/Icons/ArrowRight.tsx';
import ChevronLeft from '@/components/Icons/ChevronLeft.tsx';

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
      <CustomizeTopPanel title={title}>
        <Button className="p-4" onClick={onClickBack}>
          <ChevronLeft className="text-3xl text-brand-900" />
        </Button>
      </CustomizeTopPanel>
      <div className="flex w-full flex-col items-center gap-y-8 p-4">
        <div
          className={clsx(
            'flex aspect-square w-full max-w-[350px] flex-col items-center justify-center gap-y-4 rounded-full border-8 bg-white drop-shadow-2xl',
            levelSelection.getCurrentStep().color.textOpacity,
          )}
        >
          <div className={clsx('text-5xl xs:text-7xl', levelSelection.getCurrentStep().color.text)}>
            {levelSelection.getCurrentStep().icon}
          </div>
          <div className={clsx('text-5xl font-bold xs:text-7xl', levelSelection.getCurrentStep().color.text)}>
            {levelSelection.getCurrentStep().label}
          </div>
        </div>
        <LevelSelection<T> steps={steps} initialValue={initialValue} onChange={handleChange} />
      </div>
      <div className="flex w-full justify-center p-4">
        <Button
          className={clsx('text-white', levelSelection.getCurrentStep().color.background)}
          onClick={() => onClickNext(levelSelection.value)}
        >
          <div className="flex items-center gap-x-3">
            <span className="whitespace-nowrap">{button}</span>
            <ArrowRight className="w-5" />
          </div>
        </Button>
      </div>
    </div>
  );
}
