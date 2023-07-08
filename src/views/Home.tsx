import { NavigateFunction, useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button.tsx';
import Logo from '@/components/Svg/Logo.tsx';
import AnimatedWaves from '@/components/Svg/AnimatedWaves/AnimatedWaves.tsx';

export default function Home() {
  const navigate: NavigateFunction = useNavigate();

  const handleClick = (): void => {
    navigate('/customize/ingredient');
  };

  return (
    <div className="flex min-h-dynamic-screen">
      <div className="flex flex-1 flex-col">
        <div className="flex h-full items-center justify-center p-8">
          <Logo className="w-full max-w-[150px]" />
        </div>
        <div className="flex h-full flex-col">
          <AnimatedWaves />
          <div className="flex flex-grow flex-col items-center justify-end gap-y-8 bg-brand-300 p-8">
            <Button size="lg" className="bg-white" onClick={handleClick}>
              Thirsty?
            </Button>
            <p className="text-center text-brand-900">Drink Water. Stay Healthy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
