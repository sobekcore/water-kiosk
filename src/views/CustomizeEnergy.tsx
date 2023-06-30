import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ENERGY, INITIAL_VALUE } from '@/configs/energy.ts';
import { LevelSelectionForm } from '@/components/LevelSelection/LevelSelectionForm.tsx';

export default function CustomizeEnergy() {
  const navigate: NavigateFunction = useNavigate();

  const handleClickBack = (): void => {
    navigate('/customize');
  };

  const handleClickNext = (): void => {
    // TODO: Create next views to customize more water parameters
  };

  return (
    <div className="flex min-h-dynamic-screen">
      <LevelSelectionForm<number>
        steps={ENERGY}
        initialValue={INITIAL_VALUE}
        title="Need a little pep in your step?"
        button="Add Energy"
        onClickBack={handleClickBack}
        onClickNext={handleClickNext}
      />
    </div>
  );
}
