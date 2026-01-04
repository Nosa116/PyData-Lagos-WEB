# PyData Lagos Website - AI Coding Agent Instructions

## Project Overview
A React-based website for PyData Lagos built with Vite, featuring premium animations, responsive design, and custom Thunder ExtraBloc typography. The site emphasizes smooth micro-interactions and modern aesthetics using CSS3 animations and React hooks for interactivity.

## Architecture & Components

### Component Structure
- **App.jsx**: Root component managing global scroll state (`scrolled` state passed to Navigation)
- **Navigation.jsx/CSS**: Fixed header with dropdown menus triggered on hover; manages `activeDropdown` state
- **Hero.jsx/CSS**: Full-viewport landing section with animated rocket illustration and parallax mouse tracking
- Component pattern: Each component has `.jsx` for logic + corresponding `.css` for styling

### State Management
- Simple React hooks (`useState`, `useEffect`) - no Redux or context needed
- Global scroll detection in App.jsx triggers Navigation styling changes
- Local state in components (e.g., `activeDropdown` in Navigation, `mousePosition` in Hero)

### Global Styling System (src/index.css)
Core CSS custom properties drive all styling:
```css
/* Colors use semantic naming */
--color-primary: #6366f1
--color-accent: #06b6d4 (cyan - used for CTAs and highlights)
--color-bg: #FFFDFB (warm off-white)

/* Predefined animations available as utility classes */
.fade-in-up, .slide-in-right, .float, .float-slow
```

## Key Patterns & Conventions

### Animation Architecture
1. **Global animations** defined in `index.css` - reusable keyframes with `@keyframes` rules
2. **Component-specific animations** defined in component CSS files using custom `@keyframes`
3. **Animation utilities**: Apply via class names or inline `animation` CSS property
4. **Timing**: Use `--transition-fast` (150ms), `--transition-base` (250ms), or `--transition-slow` (400ms)

**Example from Hero.jsx**: Rocket uses `rocketFloat` (moves up/down) + `rocketSpin` (opacity pulse) in a 4s loop

### Responsive Design
- Mobile-first approach with `@media (max-width: 1024px)` and `@media (max-width: 768px)` breakpoints
- Use `clamp()` for fluid font sizing: `clamp(2rem, 12vw, 3.5rem)` scales between min/max based on viewport
- Example: Hero title sizes adjusted per breakpoint in Hero.css

### Hover & Interactivity
- Navigation dropdown items have `.dropdown-item:hover` with gradient backgrounds and indicator dots
- Rocket image responds to mouse movement via `transform: translate()` calculated from normalized mouse position
- All transitions use `cubic-bezier(0.16, 1, 0.3, 1)` for premium feel (not generic `ease`)

### Typography
- Display font: `--font-display: 'ThunderExtBd'` from `/fonts/Thunder-ExtraBoldLC.*` files
- Body font: System font stack (`-apple-system, BlinkMacSystemFont, ...`)
- Font sizing uses `letter-spacing` for readability; hero title uses `letter-spacing: 0.08em`

## Development Workflow

### Commands
```bash
npm run dev      # Start Vite dev server on port 5173
npm run build    # Production build to dist/
npm run preview  # Preview built site
```

### Font Setup
- Thunder font variants are in `public/fonts/` (multiple weights/styles pre-imported)
- Font faces defined in `index.css` with `font-display: swap` for optimal loading

## Common Tasks

### Adding Animation
1. Define `@keyframes` in component's `.css` file
2. Apply via `animation: keyframeName duration timing infinite` on element
3. Respect timing conventions: use predefined `--transition-*` variables or `cubic-bezier(0.16, 1, 0.3, 1)`

### Styling Changes
1. Update CSS custom properties in `:root` in `index.css` for global changes
2. Component-specific: modify `@media` queries in corresponding `.css` file
3. Always maintain responsive behavior with `clamp()` or `@media` breakpoints

### Dropdown Menu Expansion
- Navigation dropdown pattern in Navigation.jsx: conditionally render items based on `activeDropdown` state
- Styling: `.dropdown` container + `.dropdown-item` children with gradient hover and animated indicator dots
- Trigger: `onMouseEnter`/`onMouseLeave` for desktop (mobile hidden per `@media (max-width: 768px)`)

## Important Details

- **Fixed Navigation**: `position: fixed; z-index: 1000` with scroll-triggered styling changes
- **No component libraries**: Build UI with vanilla HTML/CSS and React - maintain simplicity and performance
- **Vite config**: Minimal setup in `vite.config.js` - uses `@vitejs/plugin-react` for JSX
- **Color accent (cyan #04ADCE)**: Used consistently in buttons, hover states, and dropdown indicators
- **z-index hierarchy**: Navigation (1000) > Hero content (10); ensure new components respect this
