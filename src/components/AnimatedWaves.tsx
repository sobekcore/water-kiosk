import '@/components/AnimatedWaves.css';

export default function AnimatedWaves() {
  return (
    <div className="overflow-hidden">
      <svg className="waves" fill="#27a9e1" viewBox="0 0 12960 1120">
        <path d="M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z">
          <animate
            dur="5s"
            repeatCount="indefinite"
            attributeName="d"
            values="
              M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z;
              M9720,0C8100,0,8100,319,6480,319S4860,0,3240,0,1620,320,0,320v800H12960V320C11340,320,11340,0,9720,0Z;
              M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
