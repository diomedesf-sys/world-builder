import { registerRoot } from 'remotion';
import { Composition } from 'remotion';
import { MainComposition } from './composition/MainComposition';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="MainSequence"
                component={MainComposition}
                durationInFrames={300} // Placeholder duration
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};

registerRoot(RemotionRoot);
