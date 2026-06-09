# World Builder Studio (Version 3) Overview

The third and latest edition of the **World Builder Studio** application, located in `C:\Users\Diomedes Fernandez\.gemini\antigravity\scratch\WorldBuilder`, represents a major shift from a purely tabular narrative editor to a **real-time visual video studio and primitive renderer** built on **React 19** and the **Remotion Player**.

---

## 🚀 Core Features & Capabilities

1. **Embedded Remotion Player Integration**
   - Integrates the high-performance `@remotion/player` rendering engine directly on the home canvas.
   - Provides live timeline playback (play, pause, scrub) at **30 frames per second** with full frame-accurate coordinate previews.
   - Operates on a standard widescreen canvas configuration ($1920 \times 1080$).

2. **The Sacred Library (Vector Primitives Gallery)**
   - Houses a modular directory of mathematically structured SVG vector shapes. These are used procedurally to generate visual beats:
     * **Lines** (`PNSLine`): Clean horizontal strokes.
     * **Curves** (`PNSCurve` / `PNSDoubleCurve`): Quadratic and cubic Bezier paths.
     * **Polygons** (`PNSSquare` / `PNSTriangle` / `PNSRect` / `PNSCircle`): Essential geometry matrices.
     * **Concentric Rings** (`PNSConcentric`): Iterative concentric circles.
     * **Postures** (`PNSHuman`): Custom human stick-figure postures (e.g. `equilibrium`, `invitation`, `exaltation`) representing physical and emotional states.

3. **Relative Absolute Layout Engine (`BaseSVG.tsx`)**
   - Implements a coordinate translation wrapper utilizing normalized coordinates (`[x, y]` from $0.0 \rightarrow 1.0$) to scale, rotate, and center vector assets cleanly within any rendering viewport.

---

## 📂 Core Component Views & Layouts

* **Player View (`App.tsx`)**
  * Displays the core layout, centering the video playback screen over the modular primitive shapes library cards.
* **Main Composition (`MainComposition.tsx`)**
  * The orchestration entry point for video sequences. Implements smooth spring-physics interpolations (`spring` / `interpolate`) to transition elements procedurally through:
    * **Opacity fades** ($0 \rightarrow 1$)
    * **Scale pops** ($0 \rightarrow 1.5$)
    * **Motion paths** (e.g. emerge, approach, collapse)
* **Primitives Engine (`src/components/primitives/`)**
  * Contains the vector layout assets that form the building blocks of the animation library.
* **Character Postures (`src/components/characters/`)**
  * Core outline skeleton matrices translating posture codes into precise SVG path structures.
