import { useEffect } from 'react';
import clsx from 'clsx';
import { UseCurrentRouteReturn, useCurrentRoute } from '@/hooks/useCurrentRoute.ts';
import { UseWaterParameterReturn, useWaterParameter } from '@/hooks/useWaterParameter.ts';
import Page from '@/components/Common/Page.tsx';
import CustomizeTopPanel from '@/components/CustomizeTopPanel/CustomizeTopPanel.tsx';
import WaterParameter from '@/components/WaterParameters/WaterParameter.tsx';
import AnimatedWaterCup from '@/components/AnimatedWaterCup/AnimatedWaterCup.tsx';

export default function Dispensing() {
  const currentRoute: UseCurrentRouteReturn = useCurrentRoute();
  const waterParameter: UseWaterParameterReturn = useWaterParameter();

  useEffect((): void => {
    /**
     * TODO: Implement proper waiting system for water to be dispensed
     */
    setTimeout((): void => {
      currentRoute.navigate('/finished');
    }, 10000);
  }, []);

  return (
    <Page animation="fade" className="flex min-h-dynamic-screen">
      <div className="flex flex-1 flex-col items-center justify-between p-4">
        <CustomizeTopPanel title="We are making you dreams come true!" />
        <div className="flex w-full justify-center gap-y-8 p-4">
          <AnimatedWaterCup className="aspect-square h-full w-full max-w-[350px] drop-shadow-2xl" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 p-4 xs:gap-10">
          <WaterParameter title={waterParameter.getIngredientParameter().title}>
            <img
              src={waterParameter.getIngredientParameter().image}
              alt={waterParameter.getIngredientParameter().title}
              className="h-16 w-16 scale-150"
            />
          </WaterParameter>
          <WaterParameter title={waterParameter.getEnergyParameter().label}>
            <div className={clsx('text-6xl', waterParameter.getEnergyParameter().color.text)}>
              {waterParameter.getEnergyParameter().icon}
            </div>
          </WaterParameter>
          <WaterParameter title={waterParameter.getTemperatureParameter().label}>
            <div className={clsx('text-6xl', waterParameter.getTemperatureParameter().color.text)}>
              {waterParameter.getTemperatureParameter().icon}
            </div>
          </WaterParameter>
        </div>
      </div>
    </Page>
  );
}
