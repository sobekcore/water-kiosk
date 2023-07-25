import { useContext } from 'react';
import { ENERGY, INITIAL_VALUE } from '@/configs/energy.tsx';
import { EnergyValue } from '@/enums/energy.ts';
import { UseCurrentRouteReturn, useCurrentRoute } from '@/hooks/useCurrentRoute.ts';
import { WaterContext, WaterContextData } from '@/providers/WaterProvider.tsx';
import Page from '@/components/Common/Page.tsx';
import LevelSelectionForm from '@/components/LevelSelection/LevelSelectionForm.tsx';

export default function CustomizeEnergy() {
  const waterContext: WaterContextData | null = useContext(WaterContext);
  const currentRoute: UseCurrentRouteReturn = useCurrentRoute();

  const handleClickBack = (): void => {
    if (waterContext) {
      waterContext.clearIngredient();
    }

    currentRoute.navigate('/customize/ingredient');
  };

  const handleClickNext = (energy: EnergyValue): void => {
    if (waterContext) {
      waterContext.setEnergy(energy);
    }

    currentRoute.navigate(`/customize/temperature`);
  };

  return (
    <Page
      animation="fromLeftToRight"
      fromPrev={currentRoute.location?.state?.from === '/customize/temperature'}
      toNext={location.pathname === '/customize/temperature'}
      className="flex min-h-dynamic-screen"
    >
      <LevelSelectionForm<EnergyValue>
        steps={ENERGY}
        initialValue={INITIAL_VALUE}
        title="Need a little pep in your step?"
        button="Add Energy"
        onClickBack={handleClickBack}
        onClickNext={handleClickNext}
      />
    </Page>
  );
}
