# World Builder: Three-Version Comparative Analysis

The **World Builder** application has undergone three distinct iterations, evolving from a local AI-augmented editor, to a stable offline collaborative framework, and finally into a live physics-powered rendering pipeline.

This document analyzes and compares the tools, frameworks, views, and core utilities featured across all three versions.

---

## 📊 Quick Comparison Matrix

| Feature / Tool | Version 1 (Active Dev Branch) | Version 2 (GitHub Master) | Version 3 (Studio & Player) |
| :--- | :--- | :--- | :--- |
| **Primary Goal** | AI-Augmented Authoring & Telemetry | Manual Offline Storyboard Sync | Live Video Playback & Rendering |
| **React Version** | React 18 | React 18 | **React 19** |
| **AI Integration** | Google Gemini (`gemini-2.5-flash`) | None (Fully Offline) | None (Rendering Focus) |
| **Animation Engine**| Structural Pre-Render Mapping | Static Vector Tables | **Remotion Player** (Spring Physics) |
| **State Sync** | Local Storage (`v1`) + Undo/Redo | Local Storage + Version Snapshots | Local Component State |
| **Routing** | None (View State Tabs) | None (View State Tabs) | **React Router DOM v7** |
| **Key Styling** | CSS + Tailwind v4 | CSS + Tailwind v4 | CSS + Tailwind v3 |

---

## 🔍 In-Depth Version Breakdown & Tools

### 1. Version 1: The AI-Augmented Writing Desk
* **Location**: `C:\Users\Diomedes Fernandez\.gemini\antigravity\scratch\world-builder`
* **Core Philosophy**: Merges literature and machine learning by translating raw poetry lines into telemetry parameters.
* **Featured Tools & Views**:
  * **Google Gemini Integration**: Uses `@google/genai` to automatically extract emotional data (tension, energy, mood colors) from raw text.
  * **Score View**: Chronologically aligns stanzas, camera motions, and narrative cue points.
  * **G-3.1 Writing Desk**: Active workspace for generating translations and procedural parameters.
  * **Bimodal Editors**: Parallel Storyboard and Vector grids with local history memory.

### 2. Version 2: The Offline Collaborative Master
* **Location**: `C:\Users\Diomedes Fernandez\.gemini\antigravity\scratch\OnGitHub\world-builder-master\world-builder-master`
* **Core Philosophy**: Eliminates internet dependencies to establish a highly stable, offline relational database for manual narrative scripting.
* **Featured Tools & Views**:
  * **Version Snapshots Manager**: Custom snapshot interface to save and load different states directly to memory.
  * **Undo/Redo History Bar**: Custom toolbar with visual forward/backward action arrows.
  * **Thumbnail presets**: Libraries to catalog and inject custom vector templates into storyboard rows.
  * **Onboarding Guide**: Step-by-step interactive manual to guide first-time authors.

### 3. Version 3: The Video Studio & Sacred Library
* **Location**: `C:\Users\Diomedes Fernandez\.gemini\antigravity\scratch\WorldBuilder`
* **Core Philosophy**: Transitioning from data input fields to a visual rendering studio showcasing vector primitives and stick-figure character postures.
* **Featured Tools & Views**:
  * **Remotion Player Integration**: Full live canvas player supporting scrubbing, stepping, and play/pause controls in-browser.
  * **Sacred Library**: Visual cards representing lines, curves, concentric rings, polygons, and anatomical skeletal coordinate structures.
  * **Spring Physics Transitions**: Real-time programmatic scaling, coordinate motion paths, and opacity shifts powered by `spring()` calculations.
