# LostCity Model & Animation Editor

A web-based 3D model viewer and editor for RuneScape cache files, specifically designed for use with the LostCity server.

## Features

- **Model Viewing**: Load and view .ob2 model files with full 3D rendering
- **Animation Support**: View and edit animation frames and sequences
- **NPC/Object/Location Support**: Load models from .npc, .obj, and .loc configuration files
- **Interactive Editing**: 
  - Vertex-level editing with visual feedback
  - Face and vertex label highlighting
  - Real-time model manipulation
- **Export Functionality**: Export modified models back to .ob2 format and anim frames back to .Frame format

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

```bash
git clone <repository-url>
cd lostcity-model-editor
npm install
npm run dev
```

### Building

```bash
npm run build
```

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see LICENSE file for details