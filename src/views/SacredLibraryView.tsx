import { PNSLine } from '../components/primitives/PNSLine';
import { PNSCurve } from '../components/primitives/PNSCurve';
import { PNSDoubleCurve } from '../components/primitives/PNSDoubleCurve';
import { PNSCircle } from '../components/primitives/PNSCircle';
import { PNSSquare } from '../components/primitives/PNSSquare';
import { PNSTriangle } from '../components/primitives/PNSTriangle';
import { PNSRect } from '../components/primitives/PNSRect';
import { PNSConcentric } from '../components/primitives/PNSConcentric';
import { PNSHuman } from '../components/characters/PNSHuman';

const SHAPES = [
  { label: 'Line', description: 'Force — direction — boundary', color: '#34d399', Component: PNSLine },
  { label: 'Curve', description: 'Flow — organic motion', color: '#60a5fa', Component: PNSCurve },
  { label: 'Double Curve', description: 'Echo — duality — reflection', color: '#f472b6', Component: PNSDoubleCurve },
  { label: 'Circle', description: 'System — cycle — containment', color: '#fbbf24', Component: PNSCircle },
  { label: 'Square', description: 'Structure — stability — rule', color: '#a78bfa', Component: PNSSquare },
  { label: 'Triangle', description: 'Tension — hierarchy — apex', color: '#f87171', Component: PNSTriangle },
  { label: 'Rect', description: 'Container — territory — frame', color: '#2dd4bf', Component: PNSRect },
  { label: 'Concentric', description: 'Depth — resonance — cosmos', color: '#e879f9', Component: PNSConcentric },
];

export const SacredLibraryView = () => (
  <div className="p-10">
    <h1 className="text-2xl font-bold text-white mb-1">Sacred Library</h1>
    <p className="text-gray-400 text-sm mb-10">
      The 8 geometric primitives of the Pictographic Narrative System — each a force, a container, or a system.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
      {SHAPES.map(({ label, description, color, Component }) => (
        <div key={label} className="flex flex-col items-center gap-3 text-center">
          <div className="relative w-36 h-36 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 transition-colors">
            <Component color={color} />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{label}</p>
            <p className="text-xs text-gray-500 mt-0.5">{description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="border-t border-gray-800 pt-10">
      <h2 className="text-lg font-semibold text-white mb-1">The Human Figure</h2>
      <p className="text-gray-400 text-sm mb-6">
        A 9th element — the only character. Emotion encoded through posture, never through a face.
      </p>
      <div className="flex flex-col items-center gap-3 text-center w-36">
        <div className="relative w-36 h-36 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-600 transition-colors">
          <PNSHuman color="#ffffff" posture="equilibrium" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Human</p>
          <p className="text-xs text-gray-500 mt-0.5">9 postures — 9 states of being</p>
        </div>
      </div>
    </div>
  </div>
);
