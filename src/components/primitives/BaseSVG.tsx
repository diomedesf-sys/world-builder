import type { PrimitiveProps } from '../../types';

interface BaseSVGProps extends PrimitiveProps {
    children: React.ReactNode;
    viewBox?: string;
}

export const BaseSVG: React.FC<BaseSVGProps> = ({
    color = 'currentColor',
    scale = 1,
    rotation = 0,
    position = [0.5, 0.5], // Center default
    opacity = 1,
    children,
    viewBox = "0 0 100 100"
}) => {
    const [x, y] = position;

    // We use percentage-based positioning container to allow the glyph to be placed anywhere
    // The svg itself is centered within this container transform

    return (
        <div
            className="absolute flex items-center justify-center w-24 h-24 overflow-visible"
            style={{
                left: `calc(${x * 100}% - 3rem)`,
                top: `calc(${y * 100}% - 3rem)`,
                transform: `rotate(${rotation}deg) scale(${scale})`,
                opacity,
            }}
        >
            <svg
                viewBox={viewBox}
                className="w-24 h-24 overflow-visible" // Base size, scaled by transform
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {children}
            </svg>
        </div>
    );
};
