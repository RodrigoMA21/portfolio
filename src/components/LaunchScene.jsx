function Rocket() {
  return (
    <svg viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10 8 C 10 2 12 0 16 0 C 20 0 22 2 22 8 Z" fill="var(--rocket-nose)" />
      <path d="M 10 8 C 10 2 12 0 16 0 C 20 0 22 2 22 8 Z" fill="white" opacity="0.1" />

      <rect x="10" y="8" width="12" height="22" rx="1" fill="var(--rocket-body)" />
      <rect x="10" y="8" width="12" height="22" rx="1" stroke="var(--rocket-stripe)" strokeWidth="0.3" opacity="0.15" />

      <rect x="10" y="8" width="12" height="1.5" rx="0.3" fill="var(--rocket-stripe)" opacity="0.2" />

      <circle cx="16" cy="17" r="3" fill="var(--rocket-window)" opacity="0.12" />
      <circle cx="16" cy="17" r="2.4" fill="var(--rocket-window)" opacity="0.28" />
      <circle cx="16" cy="17" r="1.6" fill="var(--rocket-window)" opacity="0.55" />
      <path d="M 14.5 16 Q 16 14.5 17.5 16" stroke="white" strokeWidth="0.7" strokeLinecap="round" opacity="0.65" />

      <rect x="10" y="26" width="12" height="1.5" rx="0.3" fill="var(--rocket-stripe)" opacity="0.2" />

      <path d="M 9 26 C 6 28 4 31 4 33 L 10 32 Z" fill="var(--rocket-fin)" />
      <path d="M 9 26 C 6 28 4 31 4 33 L 10 32 Z" fill="white" opacity="0.08" />
      <path d="M 23 26 C 26 28 28 31 28 33 L 22 32 Z" fill="var(--rocket-fin)" />
      <path d="M 23 26 C 26 28 28 31 28 33 L 22 32 Z" fill="white" opacity="0.08" />

      <rect x="12" y="29" width="8" height="3" rx="1" fill="var(--rocket-nozzle)" />
      <rect x="13" y="31" width="6" height="1.5" rx="0.5" fill="var(--rocket-nozzle)" opacity="0.5" />
      <rect x="10" y="28.5" width="12" height="0.6" rx="0.2" fill="var(--rocket-stripe)" opacity="0.08" />

      <ellipse cx="16" cy="32" rx="2.5" ry="0.5" fill="var(--rocket-nozzle)" opacity="0.2" />

      <path className="rocket-flame-outer" d="M 12 33 Q 16 48 20 33 Z" fill="var(--rocket-flame-outer)" opacity="0.25" />
      <path className="rocket-flame-mid" d="M 13 33 Q 16 45 19 33 Z" fill="var(--rocket-flame-mid)" opacity="0.35" />
      <path className="rocket-flame-inner" d="M 14.5 33 Q 16 40 17.5 33 Z" fill="var(--rocket-flame-inner)" opacity="0.55" />
    </svg>
  );
}

function LaunchScene() {
  return (
    <div className="launch-scene" aria-hidden="true">
      <div className="launch-rocket">
        <Rocket />
      </div>
    </div>
  );
}

export default LaunchScene;
