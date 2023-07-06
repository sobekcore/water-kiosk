import { useContext } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ENERGY, INITIAL_VALUE } from '@/configs/energy.tsx';
import { WaterContextData, WaterContext } from '@/providers/WaterProvider.tsx';
import LevelSelectionForm from '@/components/LevelSelection/LevelSelectionForm.tsx';

export default function CustomizeEnergy() {
  const navigate: NavigateFunction = useNavigate();
  const waterContext: WaterContextData | null = useContext(WaterContext);

  const handleClickBack = (): void => {
    navigate('/customize/ingredient');
  };

  const handleClickNext = (energy: number): void => {
    if (waterContext) {
      waterContext.setEnergy(energy);
    }

    navigate(`/customize/temperature`);
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
