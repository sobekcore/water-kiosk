import { Target } from 'framer-motion';

export interface Animation {
  initial: Target;
  animate: Target;
  exit: Target;
}
