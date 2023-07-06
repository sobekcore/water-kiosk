import { useContext } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { TEMPERATURE, INITIAL_VALUE } from '@/configs/temperature.tsx';
import { WaterContextData, WaterContext } from '@/providers/WaterProvider.tsx';
import LevelSelectionForm from '@/components/LevelSelection/LevelSelectionForm.tsx';

export default function CustomizeTemperature() {
  const navigate: NavigateFunction = useNavigate();
  const waterContext: WaterContextData | null = useContext(WaterContext);

  const handleClickBack = (): void => {
    navigate('/customize/energy');
  };

  const handleClickNext = (temperature: number): void => {
    if (waterContext) {
      waterContext.setTemperature(temperature);
    }

    navigate('/dispensing');
  };

  return (
    <div className="flex min-h-dynamic-screen">
      <LevelSelectionForm<number>
        steps={TEMPERATURE}
        initialValue={INITIAL_VALUE}
        title="Select your desired water temp."
        button="Dispense"
        onClickBack={handleClickBack}
        onClickNext={handleClickNext}
      />
    </div>
  );
}
