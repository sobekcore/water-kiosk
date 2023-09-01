import { HTMLAttributes, useEffect, useState } from 'react';
import { clamp } from 'framer-motion';

interface GlassEmptyProps extends HTMLAttributes<HTMLDivElement> {
  fill?: number;
}

export default function GlassFilled({ fill = 0, ...props }: GlassEmptyProps) {
  const [offset, setOffset] = useState<number>(100);

  useEffect((): void => {
    setOffset(fill ? 100 - clamp(20, 100, fill) : 100);
  }, [fill]);

  return (
    <div {...props}>
      <svg className="icon" viewBox="0 0 44.613 44.613">
        <defs>
          <path
            id="fill"
            d="M36.141,3.659C35.215,0.789,27.158,0,22.277,0C17.395,0,9.335,0.79,8.414,3.662L8.325,3.671l0.032,0.33c-0.009,0.073-0.036,0.14-0.036,0.215c0,0.221,0.044,0.43,0.118,0.631l3.504,36.023c-0.003,0.04-0.017,0.077-0.017,0.118c0,2.862,6.466,3.625,10.287,3.625c3.779,0,10.135-0.75,10.275-3.535l0.009,0.001l3.796-37.404L36.141,3.659z"
          />
          <clipPath id="clip">
            <use xlinkHref="#fill" />
          </clipPath>
        </defs>
        <path d="M36.141,3.659C35.215,0.789,27.158,0,22.277,0C17.395,0,9.335,0.79,8.414,3.662L8.325,3.671l0.032,0.33c-0.009,0.073-0.036,0.14-0.036,0.215c0,0.221,0.044,0.43,0.118,0.631l3.504,36.023c-0.003,0.04-0.017,0.077-0.017,0.118c0,2.862,6.466,3.625,10.287,3.625c3.779,0,10.135-0.75,10.275-3.535l0.009,0.001l3.796-37.404L36.141,3.659z M22.213,42.813c-5.564,0-8.328-1.319-8.489-1.806c0.161-0.525,2.923-1.845,8.489-1.845c5.565,0,8.328,1.32,8.49,1.806C30.541,41.494,27.778,42.813,22.213,42.813z M30.909,38.894c-2.162-1.167-6.058-1.531-8.695-1.531c-2.621,0-6.486,0.36-8.656,1.509L10.42,6.62c2.919,1.381,8.252,1.813,11.857,1.813c3.627,0,9.003-0.439,11.909-1.84L30.909,38.894z M34.426,4.227c-0.217,0.827-4.644,2.406-12.149,2.406c-7.075,0-11.417-1.404-12.074-2.249L10.176,4.11C10.669,3.38,14.599,1.8,22.277,1.8c8.049,0,11.984,1.737,12.152,2.401L34.426,4.227z" />
        <g clipPath="url(#clip)">
          <use xlinkHref="#fill" style={{ transform: `translateY(${offset}%)` }} />
        </g>
      </svg>
    </div>
  );
}
