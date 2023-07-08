import { useContext } from 'react';
import { TEMPERATURE, INITIAL_VALUE } from '@/configs/temperature.tsx';
import { TemperatureValue } from '@/enums/temperature.ts';
import { WaterContextData, WaterContext } from '@/providers/WaterProvider.tsx';
import { UseCurrentRouteReturn, useCurrentRoute } from '@/hooks/useCurrentRoute.ts';
import LevelSelectionForm from '@/components/LevelSelection/LevelSelectionForm.tsx';

export default function CustomizeTemperature() {
  const waterContext: WaterContextData | null = useContext(WaterContext);
  const currentRoute: UseCurrentRouteReturn = useCurrentRoute();

  const handleClickBack = (): void => {
    if (waterContext) {
      waterContext.clearEnergy();
    }

    currentRoute.navigate('/customize/energy');
  };

  const handleClickNext = (temperature: TemperatureValue): void => {
    if (waterContext) {
      waterContext.setTemperature(temperature);
    }

    currentRoute.navigate('/dispensing');
  };

  return (
    <div className="flex min-h-dynamic-screen">
      <LevelSelectionForm<TemperatureValue>
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
