import { PNSHuman } from '../components/characters/PNSHuman';
import type { Posture } from '../types';

const POSTURES: { posture: Posture; label: string; description: string }[] = [
  { posture: 'state1', label: 'State 1', description: 'Arms down — rest' },
  { posture: 'state2', label: 'State 2', description: 'Arms wavy — uncertainty' },
  { posture: 'state3', label: 'State 3', description: 'Arms diagonal — asymmetry' },
  { posture: 'state4', label: 'State 4', description: 'Arms T — openness' },
  { posture: 'state5', label: 'State 5', description: 'Arms raised — exaltation' },
  { posture: 'state6', label: 'State 6', description: 'Arms low V — surrender' },
  { posture: 'state7', label: 'State 7', description: 'Arms curved up — invocation' },
  { posture: 'state8', label: 'State 8', description: 'Arms curved down — protection' },
  { posture: 'state9', label: 'State 9', description: 'One arm raised — defiance' },
];

const ALIASES: { posture: Posture; label: string; mapsTo: string }[] = [
  { posture: 'equilibrium', label: 'Equilibrium', mapsTo: '→ State 1' },
  { posture: 'invitation', label: 'Invitation', mapsTo: '→ State 4' },
  { posture: 'exaltation', label: 'Exaltation', mapsTo: '→ State 5' },
];

export const PosturesView = () => (
  <div className="p-10">
    <h1 className="text-2xl font-bold text-white mb-1">Human Postures</h1>
    <p className="text-gray-400 text-sm mb-10">
      9 body states. No facial features. Emotion lives entirely in the geometry of the body.
    </p>

    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 mb-14">
      {POSTURES.map(({ posture, label, description }) => (
        <div key={posture} className="flex flex-col items-center gap-2 text-center">
          <div className="relative w-28 h-28 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 transition-colors">
            <PNSHuman color="#ffffff" posture={posture} />
          </div>
          <p className="text-xs font-medium text-gray-300">{label}</p>
          <p className="text-xs text-gray-500 leading-tight">{description}</p>
        </div>
      ))}
    </div>

    <div className="border-t border-gray-800 pt-10">
      <h2 className="text-lg font-semibold text-white mb-1">Semantic Aliases</h2>
      <p className="text-gray-400 text-sm mb-6">
        Named shortcuts — poetic handles for specific states.
      </p>
      <div className="flex gap-6">
        {ALIASES.map(({ posture, label, mapsTo }) => (
          <div key={posture} className="flex flex-col items-center gap-2 text-center">
            <div className="relative w-28 h-28 bg-gray-900 border border-indigo-900 rounded-xl">
              <PNSHuman color="#818cf8" posture={posture} />
            </div>
            <p className="text-xs font-medium text-indigo-400">{label}</p>
            <p className="text-xs text-gray-600">{mapsTo}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
