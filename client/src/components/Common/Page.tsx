import { HTMLAttributes, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION } from '@/configs/animation.ts';
import { Animation } from '@/interfaces/animation.ts';
import { CurrentRouteContext, CurrentRouteContextData } from '@/providers/CurrentRouteProvider.tsx';

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  animation: keyof typeof ANIMATION;
  fromPrev?: boolean;
  toNext?: boolean;
}

export default function Page({ animation, fromPrev = false, toNext = false, className, children }: PageProps) {
  const currentRouteContext: CurrentRouteContextData | null = useContext(CurrentRouteContext);

  useEffect((): void => {
    if (currentRouteContext) {
      currentRouteContext.setLoaded(true);
    }
  }, []);

  const getCurrentAnimation = (): Animation => {
    if (currentRouteContext && !currentRouteContext.getLoaded()) {
      return ANIMATION.fade(fromPrev, toNext);
    }

    return ANIMATION[animation](fromPrev, toNext);
  };

  const handleAnimationStart = (): void => {
    document.body.classList.add('overflow-hidden');
  };

  const handleAnimationComplete = (): void => {
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <motion.div
      data-test="page"
      initial={getCurrentAnimation().initial}
      animate={getCurrentAnimation().animate}
      exit={getCurrentAnimation().exit}
      transition={{ ease: 'linear', duration: 0.4 }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
    >
      {children}
    </motion.div>
  );
}
