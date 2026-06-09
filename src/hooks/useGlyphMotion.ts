import { useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from 'remotion';
import { MotionConfig, PrimitiveProps } from '../types';

export const useGlyphMotion = (motion: MotionConfig | undefined, startTime: number, duration: number) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Default static props if no motion
    const defaults: Partial<PrimitiveProps> = {
        opacity: 1,
        scale: 1,
        rotation: 0,
        position: [0, 0], // Relative offset
    };

    if (!motion) return defaults;

    // Convert seconds to frames
    const durationInFrames = duration * fps;
    const startFrame = startTime * fps;

    // Calculate progress (0 to 1) for the duration of the beat
    const progress = spring({
        frame: frame - startFrame,
        fps,
        config: {
            stiffness: 50,
            damping: 10,
        },
        durationInFrames: durationInFrames,
    });

    // Continuous oscillation for "pulse" / "oscillate"
    const time = (frame - startFrame) / fps;

    const overrides: Partial<PrimitiveProps> = {};

    switch (motion.verb) {
        case "emerge":
            // Fade in + Scale up from 0
            overrides.opacity = interpolate(progress, [0, 1], [0, 1]);
            overrides.scale = interpolate(progress, [0, 1], [0, 1]);
            break;

        case "approach":
            // Move from distance (scale up slightly?) + Opacity
            // Or move from Z-depth? 2D implies scale.
            overrides.scale = interpolate(progress, [0, 1], [0.5, 1]);
            overrides.opacity = interpolate(progress, [0, 1], [0, 1]);
            break;

        case "compress":
            // Scale down
            overrides.scale = interpolate(progress, [0, 1], [1, 0.2]);
            break;

        case "expand":
            // Scale up
            overrides.scale = interpolate(progress, [0, 1], [1, 2.5]);
            overrides.opacity = interpolate(progress, [0.8, 1], [1, 0]); // Fade out at end
            break;

        case "pulse":
            // Sine wave scale
            // frequency depends on speed
            const freq = motion.speed === "fast" ? 5 : motion.speed === "slow" ? 1 : 3;
            const sine = Math.sin(time * freq);
            overrides.scale = 1 + (sine * 0.2); // +/- 20%
            break;

        case "collapse":
            // Rapid scale down + fade
            overrides.scale = interpolate(progress, [0, 1], [1, 0]);
            overrides.opacity = interpolate(progress, [0, 1], [1, 0]);
            break;

        case "scatter":
            // Hard to do with single primitive, implies multiple. 
            // For single primitive, maybe rapid vibration?
            const randomX = Math.sin(time * 20) * 0.05;
            const randomY = Math.cos(time * 23) * 0.05;
            overrides.position = [randomX, randomY];
            overrides.opacity = interpolate(progress, [0, 1], [1, 0]);
            break;

        case "oscillate":
            // Rotate back and forth or move side to side
            const osc = Math.sin(time * 2);
            overrides.rotation = osc * 15; // +/- 15 degrees
            break;

        case "encircle":
            // Rotate 360
            overrides.rotation = interpolate(progress, [0, 1], [0, 360]);
            break;
    }

    // Apply Transition overrides if present (e.g., setupTransition)
    if (motion.transition) {
        const transitionDuration = 30; // 1 second
        const tProgress = interpolate(frame - startFrame, [0, transitionDuration], [0, 1], {
            extrapolateRight: "clamp",
        });

        switch (motion.transition) {
            case "fade-in":
                overrides.opacity = (overrides.opacity ?? 1) * tProgress;
                break;
            case "pop-in":
                const pop = spring({ frame: frame - startFrame, fps, config: { stiffness: 200 } });
                overrides.scale = (overrides.scale ?? 1) * pop;
                break;
            // ... add others
        }
    }

    return { ...defaults, ...overrides };
};
