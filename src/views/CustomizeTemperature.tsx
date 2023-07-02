import { NavigateFunction, useNavigate } from 'react-router-dom';
import { TEMPERATURE, INITIAL_VALUE } from '@/configs/temperature.tsx';
import LevelSelectionForm from '@/components/LevelSelection/LevelSelectionForm.tsx';

export function CustomizeTemperature() {
  const navigate: NavigateFunction = useNavigate();

  const handleClickBack = (): void => {
    navigate('/customize/energy');
  };

  const handleClickNext = (): void => {
    // TODO: Redirect to next route while waiting for water
  };

  return (
    <div className="flex min-h-dynamic-screen">
      <LevelSelectionForm<string>
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
