import { HTMLAttributes } from 'react';

interface GlassWaterProps extends HTMLAttributes<HTMLDivElement> {}

export default function GlassWater({ ...props }: GlassWaterProps) {
  return (
    <div {...props}>
      <svg className="icon" viewBox="0 -16 384 544">
        <defs>
          <path
            id="icon"
            d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4 .1 34.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3H275.3c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0H32zM73 156.5L66.4 64H317.6L311 156.5l-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0c-20.9-10.4-45.5-10.4-66.4 0c-19.4 9.7-42.2 9.7-61.6 0L73 156.5z"
          />
        </defs>
        <use xlinkHref="#icon" stroke="currentColor" strokeWidth="32px" />
        <use xlinkHref="#icon" stroke="black" strokeWidth="32px" strokeOpacity="0.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
