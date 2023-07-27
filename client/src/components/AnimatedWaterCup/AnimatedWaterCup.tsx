import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import '@/components/AnimatedWaterCup/AnimatedWaterCup.css';

interface AnimatedWaterCupProps extends HTMLAttributes<HTMLDivElement> {}

export default function AnimatedWaterCup({ className, ...props }: AnimatedWaterCupProps) {
  return (
    <div className={clsx('animated-water-cup', className)} {...props}>
      <div className="liquid"></div>
      <div className="ice-cubes">
        <div className="ice-cube ice-cube-1"></div>
        <div className="ice-cube ice-cube-2"></div>
        <div className="ice-cube ice-cube-3"></div>
      </div>
      <div className="leaves">
        <div className="leave leave-1"></div>
        <div className="leave leave-2"></div>
        <div className="leave leave-3"></div>
      </div>
      <div className="ingredients">
        <div className="lemon"></div>
      </div>
    </div>
  );
}
