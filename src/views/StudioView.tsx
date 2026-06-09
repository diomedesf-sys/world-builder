import { useState } from 'react';
import { Player } from '@remotion/player';
import { StudioComposition } from '../composition/StudioComposition';
import type { GlyphVerb, Posture } from '../types';

const SHAPES = ['PNSCircle', 'PNSLine', 'PNSCurve', 'PNSDoubleCurve', 'PNSSquare', 'PNSTriangle', 'PNSRect', 'PNSConcentric', 'PNSHuman'];
const VERBS: GlyphVerb[] = ['emerge', 'approach', 'compress', 'expand', 'pulse', 'collapse', 'scatter', 'oscillate', 'encircle'];
const POSTURES: Posture[] = ['state1', 'state2', 'state3', 'state4', 'state5', 'state6', 'state7', 'state8', 'state9', 'equilibrium', 'invitation', 'exaltation'];
const COLORS = [
  { label: 'Gold', value: '#fbbf24' },
  { label: 'Violet', value: '#a78bfa' },
  { label: 'Emerald', value: '#34d399' },
  { label: 'Blue', value: '#60a5fa' },
  { label: 'Rose', value: '#f472b6' },
  { label: 'White', value: '#ffffff' },
  { label: 'Cyan', value: '#2dd4bf' },
  { label: 'Red', value: '#f87171' },
];

const selectClass = 'bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500 w-full';
const labelClass = 'text-xs text-gray-400 mb-1 block';

export const StudioView = () => {
  const [shapeType, setShapeType] = useState('PNSCircle');
  const [verb, setVerb] = useState<GlyphVerb>('emerge');
  const [color, setColor] = useState('#fbbf24');
  const [posture, setPosture] = useState<Posture>('equilibrium');

  const inputProps = { shapeType, verb, color, posture };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-white mb-1">Studio</h1>
      <p className="text-gray-400 text-sm mb-8">
        Compose a single beat — pick a shape, a verb, and watch it come alive.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Controls */}
        <div className="lg:w-56 shrink-0 space-y-5">
          <div>
            <label className={labelClass}>Shape</label>
            <select className={selectClass} value={shapeType} onChange={e => setShapeType(e.target.value)}>
              {SHAPES.map(s => <option key={s} value={s}>{s.replace('PNS', '')}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>Motion Verb</label>
            <select className={selectClass} value={verb} onChange={e => setVerb(e.target.value as GlyphVerb)}>
              {VERBS.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>

          <div>
            <label className={labelClass}>Color</label>
            <div className="flex flex-wrap gap-2">
              {COLORS.map(({ label, value }) => (
                <button
                  key={value}
                  title={label}
                  onClick={() => setColor(value)}
                  className={`w-7 h-7 rounded-full border-2 transition-all ${color === value ? 'border-white scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: value }}
                />
              ))}
            </div>
          </div>

          {shapeType === 'PNSHuman' && (
            <div>
              <label className={labelClass}>Posture</label>
              <select className={selectClass} value={posture} onChange={e => setPosture(e.target.value as Posture)}>
                {POSTURES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          )}
        </div>

        {/* Player */}
        <div className="flex-1 min-w-0">
          <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-950">
            <Player
              component={StudioComposition}
              inputProps={inputProps}
              durationInFrames={90}
              compositionWidth={1280}
              compositionHeight={720}
              fps={30}
              controls
              loop
              style={{ width: '100%', aspectRatio: '16/9' }}
            />
          </div>
          <p className="mt-3 text-center text-xs text-gray-500">
            {shapeType.replace('PNS', '')} · <span className="text-indigo-400">{verb}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
