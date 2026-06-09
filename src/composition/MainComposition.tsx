import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { PNSCircle } from '../components/primitives/PNSCircle';
import type { VectorRow } from '../types';

const SAMPLE_VECTOR_ROW: VectorRow = {
    beatId: "beat-1",
    startTime: 0,
    duration: 5,
    elements: [
        {
            component: "PNSCircle",
            props: {
                color: "#fbbf24",
                position: [0.5, 0.5],
                scale: 1.5,
            }
        }
    ],
    motion: {
        verb: "emerge",
        speed: "medium",
        transition: "fade-in"
    }
};

export const MainComposition: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // "Emerge" logic: Fade in + Scale up
    const progress = spring({
        frame,
        fps,
        config: {
            stiffness: 100,
            damping: 10,
        },
        durationInFrames: 60, // 2 seconds for medium speed?
    });

    const animatedOpacity = interpolate(progress, [0, 1], [0, 1]);
    const animatedScale = interpolate(progress, [0, 1], [0, 1]);

    return (
        <AbsoluteFill className="bg-gray-900">
            {SAMPLE_VECTOR_ROW.elements.map((el, idx) => {
                if (el.component === "PNSCircle") {
                    return (
                        <PNSCircle
                            key={idx}
                            {...el.props}
                            color={el.props.color}
                            // Override static props with animated values
                            opacity={animatedOpacity}
                            scale={(el.props.scale || 1) * animatedScale}
                        />
                    );
                }
                return null;
            })}
            <div className="absolute bottom-10 left-10 text-white font-mono opacity-50">
                Verb: {SAMPLE_VECTOR_ROW.motion?.verb} |
                Transition: {SAMPLE_VECTOR_ROW.motion?.transition}
            </div>
        </AbsoluteFill>
    );
};

