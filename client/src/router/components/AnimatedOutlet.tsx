import { ReactElement, useState } from 'react';
import { useOutlet } from 'react-router-dom';

export default function AnimatedOutlet() {
  const outlet: ReactElement | null = useOutlet();
  const [currentOutlet] = useState<ReactElement | null>(outlet);

  return currentOutlet;
}
