import Logo from '@/components/Base/Logo.tsx';
import Button from '@/components/Base/Button.tsx';
import AnimatedWaves from '@/components/AnimatedWaves.tsx';

export default function App() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-full items-center justify-center">
        <div className="w-[150px]">
          <Logo />
        </div>
      </div>
      <div className="flex h-full flex-col">
        <AnimatedWaves />
        <div className="flex flex-grow flex-col items-center justify-end gap-8 bg-primary p-8">
          <Button size="lg">Thirsty?</Button>
          <p className="text-center text-secondary">Drink Water. Stay Healthy.</p>
        </div>
      </div>
    </div>
  );
}
