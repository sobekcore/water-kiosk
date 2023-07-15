import { HTMLAttributes, useContext, useEffect } from 'react';
import { Target, motion } from 'framer-motion';
import { CurrentRouteContextData, CurrentRouteContext } from '@/providers/CurrentRouteProvider.tsx';

const animations: Record<string, (fromPrev: boolean, toNext: boolean) => Animation> = {
  fade: (): Animation => ({
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }),
  fromFadeToLeft: (fromPrev: boolean, toNext: boolean): Animation => ({
    initial: {
      translateX: fromPrev ? '-25%' : 0,
      opacity: 0,
    },
    animate: {
      translateX: 0,
      opacity: 1,
    },
    exit: {
      translateX: toNext ? '-25%' : 0,
      opacity: 0,
    },
  }),
  fromLeftToFade: (fromPrev: boolean, toNext: boolean): Animation => ({
    initial: {
      translateX: fromPrev ? '-25%' : '25%',
      opacity: 0,
    },
    animate: {
      translateX: 0,
      opacity: 1,
    },
    exit: {
      translateX: toNext ? 0 : '25%',
      opacity: 0,
    },
  }),
  fromLeftToRight: (fromPrev: boolean, toNext: boolean): Animation => ({
    initial: {
      translateX: fromPrev ? '-25%' : '25%',
      opacity: 0,
    },
    animate: {
      translateX: 0,
      opacity: 1,
    },
    exit: {
      translateX: toNext ? '-25%' : '25%',
      opacity: 0,
    },
  }),
};

interface Animation {
  initial: Target;
  animate: Target;
  exit: Target;
}

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  animation: keyof typeof animations;
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
      return animations.fade(fromPrev, toNext);
    }

    return animations[animation](fromPrev, toNext);
  };

  const handleAnimationStart = (): void => {
    document.body.classList.add('overflow-hidden');
  };

  const handleAnimationComplete = (): void => {
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <motion.div
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
