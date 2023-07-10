import { Location, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AnimatedOutlet from '@/router/components/AnimatedOutlet.tsx';

export default function AnimationContainer() {
  const location: Location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <AnimatedOutlet key={location.pathname} />
    </AnimatePresence>
  );
}
