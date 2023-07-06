import clsx from 'clsx';
import { UseWaterParameterReturn, useWaterParameter } from '@/hooks/useWaterParameter.ts';
import CustomizeTopPanel from '@/components/CustomizeTopPanel/CustomizeTopPanel.tsx';
import WaterParameter from '@/components/WaterParameters/WaterParameter.tsx';

export default function Dispensing() {
  const waterParameter: UseWaterParameterReturn = useWaterParameter();

  return (
    <div className="flex min-h-dynamic-screen">
      <div className="flex flex-1 flex-col items-center justify-between p-4">
        <CustomizeTopPanel title="We are making you dreams come true!" />
        <div className="flex w-full justify-center gap-y-8 p-4">
          <h1>TODO</h1>
        </div>
        <div className="flex items-center justify-center gap-x-10 p-4">
          <WaterParameter title={waterParameter.getIngredientParameter().title}>
            <img
              src={waterParameter.getIngredientParameter().image}
              alt={waterParameter.getIngredientParameter().title}
              className="h-[4rem] w-[4rem] scale-150"
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
    </div>
  );
}
