import { useContext } from 'react';
import { INITIAL_VALUE, TEMPERATURE } from '@/configs/temperature.tsx';
import { TemperatureValue } from '@/enums/temperature.ts';
import { UseCurrentRouteReturn, useCurrentRoute } from '@/hooks/useCurrentRoute.ts';
import { CupsContext, CupsContextData } from '@/providers/CupsProvider.tsx';
import { WaterContext, WaterContextData } from '@/providers/WaterProvider.tsx';
import Page from '@/components/Common/Page.tsx';
import LevelSelectionForm from '@/components/LevelSelection/LevelSelectionForm.tsx';

export default function CustomizeTemperature() {
  const waterContext: WaterContextData | null = useContext(WaterContext);
  const cupsContext: CupsContextData | null = useContext(CupsContext);
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

      if (cupsContext) {
        cupsContext.addCup(waterContext.getIngredient());
      }
    }

    currentRoute.navigate('/dispensing');
  };

  return (
    <Page
      animation="fromLeftToFade"
      fromPrev={currentRoute.location?.state?.from === '/dispensing'}
      toNext={location.pathname === '/dispensing'}
      className="flex min-h-dynamic-screen"
    >
      <LevelSelectionForm<TemperatureValue>
        steps={TEMPERATURE}
        initialValue={INITIAL_VALUE}
        title="Select your desired water temp."
        button="Dispense"
        onClickBack={handleClickBack}
        onClickNext={handleClickNext}
      />
    </Page>
  );
}
