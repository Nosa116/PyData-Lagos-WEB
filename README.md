# PyData Lagos Website

A creative, modern React website for PyData Lagos featuring stunning animations and premium design.

## Features

- ✨ **Thunder ExtraBold LC Font** - Bold, impactful typography
- 🎨 **Premium Design** - Gradient effects, glassmorphism, and modern aesthetics
- 🚀 **Smooth Animations** - Parallax effects, micro-interactions, and entrance animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Built with Vite** - Lightning-fast development and build times

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
```bash
cp .env.example .env
```
Set `PARSE_API_KEY` in `.env` using your key from `https://parse.bot/settings`.
Optionally set `PARSE_SCRAPER_ID` if you want to target a different Parse scraper.

3. Refresh the shared events cache file:
```bash
npm run events:refresh
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Shared Event Caching (API Quota Safe)

- Frontend reads only `public/events-cache.json` (no Parse calls from browsers).
- Run `npm run events:refresh` when you want to update events manually.
- GitHub Action `.github/workflows/refresh-events-cache.yml` refreshes weekly.
- Add repository secret `PARSE_API_KEY` for the GitHub Action.

## Project Structure

```
PyData-Lagos-WEB/
├── public/
│   └── fonts/           # Thunder ExtraBold LC font files
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css        # Global styles and animations
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties and animations
- **Thunder Font** - Custom typography

## License

MIT
