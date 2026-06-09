import React from 'react';
import type { PrimitiveProps } from '../../types';
import { BaseSVG } from '../primitives/BaseSVG';

const POSTURE_PATHS: Record<string, React.ReactElement> = {
    // 1. Neutral / Equilibrium: Arms down
    state1: <path d="M50 30 L50 70 M50 40 L30 60 M50 40 L70 60 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,
    // 2. Arms Wavy? (Based on image 2)
    state2: <path d="M50 30 L50 70 M50 45 L30 40 M30 40 L20 50 M50 45 L70 40 M70 40 L80 50 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,
    // 3. Arms Up Diagonally
    state3: <path d="M50 30 L50 70 M50 40 L20 20 M50 40 L80 60 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,
    // 4. Arms T (Outward)
    state4: <path d="M50 30 L50 70 M50 40 L20 40 M50 40 L80 40 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,
    // 5. Star (Arms Up and Out) - Exaltation?
    state5: <path d="M50 30 L50 70 M50 40 L20 20 M50 40 L80 20 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,
    // 6. Arms Down (Low V)
    state6: <path d="M50 30 L50 70 M50 40 L35 65 M50 40 L65 65 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,
    // 7. Arms Up Curved (Invocation?)
    state7: <path d="M50 30 L50 70 M50 40 Q30 30 20 10 M50 40 Q70 30 80 10 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,
    // 8. Arms Curved Down (Protection/Fear?)
    state8: <path d="M50 30 L50 70 M50 40 Q30 50 20 70 M50 40 Q70 50 80 70 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,
    // 9. One Arm Up (Defiance/Question?)
    state9: <path d="M50 30 L50 70 M50 40 L50 10 M50 40 L50 70 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />,

    // Semantic Aliases mapping
    equilibrium: <path d="M50 30 L50 70 M50 40 L30 60 M50 40 L70 60 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />, // Same as state1
    invitation: <path d="M50 30 L50 70 M50 40 L20 40 M50 40 L80 40 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />, // Same as state4?
    exaltation: <path d="M50 30 L50 70 M50 40 L20 20 M50 40 L80 20 M50 70 L30 100 M50 70 L70 100" strokeWidth="4" strokeLinecap="round" />, // Same as state5
};

export const PNSHuman: React.FC<PrimitiveProps> = (props) => {
    const { posture = "state1", color = "currentColor" } = props;

    // Ensure we have a valid path for the posture, fallback to state1
    const bodyPath = POSTURE_PATHS[posture] || POSTURE_PATHS["state1"];

    return (
        <BaseSVG {...props} viewBox="0 0 100 100">
            {/* Common Head */}
            <circle cx="50" cy="20" r="10" fill={color} stroke="none" />

            {/* Body Lines - Stroke color inherits from props or defaults to black if not filled */}
            <g stroke={color} fill="none">
                {bodyPath}
            </g>
        </BaseSVG>
    );
};
