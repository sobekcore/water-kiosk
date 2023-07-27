import { UseCurrentRouteReturn, useCurrentRoute } from '@/hooks/useCurrentRoute.ts';
import AnimatedWaves from '@/components/AnimatedWaves/AnimatedWaves.tsx';
import Button from '@/components/Common/Button/Button.tsx';
import Logo from '@/components/Common/Logo.tsx';
import Page from '@/components/Common/Page.tsx';

export default function Home() {
  const currentRoute: UseCurrentRouteReturn = useCurrentRoute();

  const handleClick = (): void => {
    currentRoute.navigate('/customize/ingredient');
  };

  return (
    <Page animation="fade" className="flex min-h-dynamic-screen">
      <div className="flex flex-1 flex-col">
        <div className="flex h-full items-center justify-center p-8">
          <Logo className="w-full max-w-[150px]" />
        </div>
        <div className="flex h-full flex-col">
          <AnimatedWaves />
          <div className="flex flex-grow flex-col items-center justify-end gap-y-8 bg-brand-300 p-8">
            <Button size="lg" className="bg-white focus-visible:outline-white" onClick={handleClick}>
              Thirsty?
            </Button>
            <p className="text-center text-brand-900">Drink Water. Stay Healthy.</p>
          </div>
        </div>
      </div>
    </Page>
  );
}
