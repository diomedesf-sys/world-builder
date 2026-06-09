export type Posture =
    | "equilibrium" // State 1 (Arms down)
    | "tension"
    | "release"
    | "chaos"
    | "invitation"
    | "exaltation"
    | "state1" | "state2" | "state3" | "state4" | "state5" | "state6" | "state7" | "state8" | "state9";


export type GlyphVerb =
    | "emerge"
    | "approach"
    | "compress"
    | "expand"
    | "pulse"
    | "collapse"
    | "scatter"
    | "oscillate"
    | "encircle";

export type Speed = "slow" | "medium" | "fast";

export type TransitionType =
    | "pop-in"
    | "fade-in"
    | "slide-in"
    | "fade-out"
    | "dissolve"
    | "pulse-in";

export interface MotionConfig {
    verb: GlyphVerb;
    speed: Speed;
    transition?: TransitionType;
}

export interface PrimitiveProps {
    color?: string;
    scale?: number;
    rotation?: number; // In degrees
    position?: [number, number]; // [x, y] normalized 0-1
    opacity?: number;
    posture?: Posture;
    // Specific geometric props might be needed per shape, but keeping them generic for now
}

export interface StoryboardRow {
    id: string;
    lineNo: number;
    narrativeIntent: string;
    emotion: string;
    durationInFrames: number;
    // Addendum specific fields
    glyphVerb?: GlyphVerb;
    setupTransition?: TransitionType;
}

export interface VectorRow {
    beatId: string;
    startTime: number; // in seconds
    duration: number;  // in seconds
    elements: Array<{
        component: "PNSLine" | "PNSCurve" | "PNSDoubleCurve" | "PNSCircle" | "PNSSquare" | "PNSTriangle" | "PNSRect" | "PNSConcentric";
        props: PrimitiveProps;
    }>;
    motion?: MotionConfig;
    textSync?: string;
}
