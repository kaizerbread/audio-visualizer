# p5.js Audio Visualizer

A web-based audio player and real-time visualizer built with p5.js and p5.sound.

## Features
- **Audio Playback**: Play/Pause control and Volume adjustment.
- **Real-time Visualization**:
  - **Radial Spectrum**: Frequency bars radiating from the center.
  - **Central Waveform**: A dynamic shape responding to audio amplitude.
- **Polished UI**: Dark mode aesthetic with a clean, centered layout.

## Setup & Usage
1. Clone this repository.
2. Open `index.html` in a modern web browser (or use a local server like Live Server for VS Code).
3. Click **Play** to start the audio and visualization.
4. Use the slider to adjust volume.

## Technical Decisions
- **Library Choice**: Used `p5.js` for its robust drawing capabilities and `p5.sound` for easy audio analysis (FFT).
- **Visualizer Design**: Chosen a radial design to make effective use of the canvas center, creating a "speaker" or "sunburst" effect that feels organic.
- **Color Palette**: Dark background (`#1a1a1a`) to make the neon pink (`rgb(255, 100, 150)`) and blue (`rgb(100, 200, 255)`) colors pop.

## Deployment
This project is designed to be hosted on GitHub Pages.
1. Go to the repository Settings.
2. Navigate to "Pages".
3. Select the `main` branch as the source.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Credits
- Audio: "Anthem of Europe" (US Navy instrumental short version) from Wikimedia Commons.
