import { Animation } from '@/interfaces/animation.ts';

export const ANIMATION: Record<string, (fromPrev: boolean, toNext: boolean) => Animation> = {
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
