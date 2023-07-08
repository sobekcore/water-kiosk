import { useContext } from 'react';
import { WaterContextData, WaterContext } from '@/providers/WaterProvider.tsx';
import { UseCurrentRouteReturn, useCurrentRoute } from '@/hooks/useCurrentRoute.ts';
import Button from '@/components/Common/Button/Button.tsx';
import Logo from '@/components/Common/Logo.tsx';
import ChevronLeft from '@/components/Icons/ChevronLeft.tsx';

export default function Finished() {
  const waterContext: WaterContextData | null = useContext(WaterContext);
  const currentRoute: UseCurrentRouteReturn = useCurrentRoute();

  const handleClick = (): void => {
    if (waterContext) {
      waterContext.clear();
    }

    currentRoute.navigate('/');
  };

  return (
    <div className="flex min-h-dynamic-screen">
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="flex items-center gap-x-2 p-4">
          <Logo className="w-16" />
          <h1 className="truncate text-4xl font-bold tracking-tighter text-brand-300">Water Kiosk</h1>
        </div>
        <div className="flex w-full justify-center p-4">
          <Button
            className="flex aspect-square w-full max-w-[350px] items-center justify-center rounded-full bg-white drop-shadow-2xl"
            defaultStyles={false}
            onClick={handleClick}
          >
            <ChevronLeft className="-mr-7 text-7xl text-brand-300 xs:-mr-8 xs:text-8xl" />
            <ChevronLeft className="-mr-7 text-7xl text-brand-300/60 xs:-mr-8 xs:text-8xl" />
            <ChevronLeft className="text-7xl text-brand-300/30 xs:text-8xl" />
          </Button>
        </div>
        <div className="mt-3 p-4 text-center text-brand-900">Your water is ready just the way you ordered it.</div>
      </div>
    </div>
  );
}
