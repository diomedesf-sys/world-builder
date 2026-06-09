import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { PNSLine } from '../components/primitives/PNSLine';
import { PNSCurve } from '../components/primitives/PNSCurve';
import { PNSDoubleCurve } from '../components/primitives/PNSDoubleCurve';
import { PNSCircle } from '../components/primitives/PNSCircle';
import { PNSSquare } from '../components/primitives/PNSSquare';
import { PNSTriangle } from '../components/primitives/PNSTriangle';
import { PNSRect } from '../components/primitives/PNSRect';
import { PNSConcentric } from '../components/primitives/PNSConcentric';
import { PNSHuman } from '../components/characters/PNSHuman';
import type { GlyphVerb, Posture } from '../types';

export interface StudioProps {
  shapeType: string;
  verb: GlyphVerb;
  color: string;
  posture: Posture;
}

const SHAPE_MAP: Record<string, React.FC<any>> = {
  PNSLine: PNSLine,
  PNSCurve: PNSCurve,
  PNSDoubleCurve: PNSDoubleCurve,
  PNSCircle: PNSCircle,
  PNSSquare: PNSSquare,
  PNSTriangle: PNSTriangle,
  PNSRect: PNSRect,
  PNSConcentric: PNSConcentric,
  PNSHuman: PNSHuman,
};

export const StudioComposition: React.FC<StudioProps> = ({ shapeType, verb, color, posture }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const loopFrame = frame % durationInFrames;

  const progress = spring({
    frame: loopFrame,
    fps,
    config: { stiffness: 80, damping: 12 },
    durationInFrames: durationInFrames * 0.8,
  });

  const time = loopFrame / fps;

  let animScale = 1;
  let animOpacity = 1;
  let animRotation = 0;

  switch (verb) {
    case 'emerge':
      animOpacity = interpolate(progress, [0, 1], [0, 1]);
      animScale = interpolate(progress, [0, 1], [0, 1]);
      break;
    case 'approach':
      animScale = interpolate(progress, [0, 1], [0.4, 1]);
      animOpacity = interpolate(progress, [0, 1], [0, 1]);
      break;
    case 'compress':
      animScale = interpolate(progress, [0, 1], [1, 0.2]);
      break;
    case 'expand':
      animScale = interpolate(progress, [0, 1], [0.8, 2.2]);
      animOpacity = interpolate(progress, [0.7, 1], [1, 0]);
      break;
    case 'pulse':
      animScale = 1 + Math.sin(time * 4) * 0.2;
      break;
    case 'collapse':
      animScale = interpolate(progress, [0, 1], [1, 0]);
      animOpacity = interpolate(progress, [0, 1], [1, 0]);
      break;
    case 'scatter':
      animOpacity = interpolate(progress, [0.7, 1], [1, 0]);
      animScale = 1 + Math.sin(time * 18) * 0.08;
      break;
    case 'oscillate':
      animRotation = Math.sin(time * 2.5) * 20;
      break;
    case 'encircle':
      animRotation = interpolate(progress, [0, 1], [0, 360]);
      break;
  }

  const ShapeComponent = SHAPE_MAP[shapeType] ?? PNSCircle;

  return (
    <AbsoluteFill style={{ backgroundColor: '#0f0f13' }}>
      <ShapeComponent
        color={color}
        scale={animScale}
        opacity={animOpacity}
        rotation={animRotation}
        position={[0.5, 0.5]}
        posture={posture}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: 24,
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'monospace',
          fontSize: 14,
        }}
      >
        {shapeType} · {verb}
      </div>
    </AbsoluteFill>
  );
};
