import { NavigateFunction, useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo.tsx';
import Button from '@/components/Button.tsx';
import AnimatedWaves from '@/components/AnimatedWaves/AnimatedWaves.tsx';

export default function Home() {
  const navigate: NavigateFunction = useNavigate();

  const handleButtonClick = (): void => {
    navigate('/customize');
  };

  return (
    <div className="flex min-h-dynamic-screen">
      <div className="flex flex-1 flex-col">
        <div className="flex h-full items-center justify-center">
          <Logo className="w-[150px]" />
        </div>
        <div className="flex h-full flex-col">
          <AnimatedWaves />
          <div className="flex flex-grow flex-col items-center justify-end gap-8 bg-primary p-8">
            <Button size="lg" onClick={handleButtonClick}>
              Thirsty?
            </Button>
            <p className="text-center text-secondary">Drink Water. Stay Healthy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
