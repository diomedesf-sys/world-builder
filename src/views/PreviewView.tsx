import { Player } from '@remotion/player';
import { MainComposition } from '../composition/MainComposition';

export const PreviewView = () => (
  <div className="p-10">
    <h1 className="text-2xl font-bold text-white mb-1">Preview</h1>
    <p className="text-gray-400 text-sm mb-8">
      The Remotion composition — a live canvas driven by the PNS engine.
    </p>

    <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
      <Player
        component={MainComposition}
        durationInFrames={150}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        controls
        loop
        style={{ width: '100%', aspectRatio: '16/9' }}
      />
    </div>

    <div className="mt-6 bg-gray-900 border border-gray-800 rounded-xl p-5">
      <p className="text-xs text-gray-400 leading-relaxed">
        This composition renders a <span className="text-white">VectorRow</span> — a beat of the poem — using spring physics.
        Every shape, posture, and motion verb in the Sacred Library can be wired into a composition like this one.
        The final output is a frame-accurate MP4 via <code className="text-indigo-400 text-xs">npm run render</code>.
      </p>
    </div>
  </div>
);
