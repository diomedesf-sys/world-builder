import { useEffect } from 'react';

const KEYFRAMES = `
  @keyframes v-emerge    { 0%{opacity:0;transform:scale(0)}  100%{opacity:1;transform:scale(1)} }
  @keyframes v-approach  { 0%{opacity:0;transform:scale(0.3)} 100%{opacity:1;transform:scale(1)} }
  @keyframes v-compress  { 0%{transform:scale(1)}  100%{transform:scale(0.2)} }
  @keyframes v-expand    { 0%{transform:scale(1);opacity:1} 100%{transform:scale(2.2);opacity:0} }
  @keyframes v-pulse     { 0%,100%{transform:scale(1)} 50%{transform:scale(1.35)} }
  @keyframes v-collapse  { 0%{transform:scale(1);opacity:1} 100%{transform:scale(0);opacity:0} }
  @keyframes v-scatter   { 0%,100%{transform:translate(0,0);opacity:1} 30%{transform:translate(-10px,-6px);opacity:0.6} 70%{transform:translate(8px,7px);opacity:0.5} }
  @keyframes v-oscillate { 0%,100%{transform:rotate(-18deg)} 50%{transform:rotate(18deg)} }
  @keyframes v-encircle  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
`;

const VERBS = [
  {
    verb: 'emerge',
    description: 'Born from nothing. Fades in while scaling up from zero.',
    color: '#34d399',
    animation: 'v-emerge 1.6s ease-in-out infinite alternate',
  },
  {
    verb: 'approach',
    description: 'Comes closer. Grows in size and clarity as it nears.',
    color: '#60a5fa',
    animation: 'v-approach 1.6s ease-in-out infinite alternate',
  },
  {
    verb: 'compress',
    description: 'Shrinks under pressure. Pulled inward by an invisible force.',
    color: '#f472b6',
    animation: 'v-compress 1.4s ease-in-out infinite alternate',
  },
  {
    verb: 'expand',
    description: 'Grows until it dissolves into the field.',
    color: '#fbbf24',
    animation: 'v-expand 2s ease-in-out infinite',
  },
  {
    verb: 'pulse',
    description: 'Breathes. A rhythmic heartbeat of scale.',
    color: '#a78bfa',
    animation: 'v-pulse 0.9s ease-in-out infinite',
  },
  {
    verb: 'collapse',
    description: 'Falls inward. Scale and opacity reach zero together.',
    color: '#f87171',
    animation: 'v-collapse 1.5s ease-in-out infinite alternate',
  },
  {
    verb: 'scatter',
    description: 'Vibrates outward in fragments. Dissolution in motion.',
    color: '#2dd4bf',
    animation: 'v-scatter 0.5s ease-in-out infinite',
  },
  {
    verb: 'oscillate',
    description: 'Swings back and forth. A pendulum of meaning.',
    color: '#fb923c',
    animation: 'v-oscillate 1s ease-in-out infinite',
  },
  {
    verb: 'encircle',
    description: 'Rotates a full orbit. Surrounds — returns — repeats.',
    color: '#e879f9',
    animation: 'v-encircle 2.2s linear infinite',
  },
];

export const MotionVerbsView = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = KEYFRAMES;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-white mb-1">Motion Verbs</h1>
      <p className="text-gray-400 text-sm mb-10">
        9 actions that describe how a shape moves — the grammar of the PNS language.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {VERBS.map(({ verb, description, color, animation }) => (
          <div
            key={verb}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-5 hover:border-gray-600 transition-colors"
          >
            {/* Animated shape demo */}
            <div className="shrink-0 w-14 h-14 flex items-center justify-center">
              <div
                style={{ animation, color, willChange: 'transform, opacity' }}
              >
                <svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="20" cy="20" r="12" />
                </svg>
              </div>
            </div>

            {/* Label + description */}
            <div>
              <p className="text-sm font-semibold text-white capitalize mb-1">{verb}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
