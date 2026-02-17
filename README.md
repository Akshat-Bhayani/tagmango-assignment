# BackstagePass - Feed UI

A responsive feed page UI built with React, featuring post cards, sidebar navigation, and light/dark mode support.

## Features

- ✅ **Feed Post Card UI** - Clean, modern post card design with proper spacing and typography
- ✅ **Subscriber Post Card** - Special post card with animated confetti header
- ✅ **Sidebar Navigation** - Interactive sidebar with day selector, blur, and locked states
- ✅ **Light & Dark Mode** - Full theme support with smooth transitions
- ✅ **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- ✅ **Smooth Animations** - Polished interactions and transitions throughout

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx          # App header with theme toggle
│   │   ├── Sidebar.jsx         # Sidebar with day selector and states
│   │   └── MainContent.jsx     # Main content area
│   ├── FeedPostCard/
│   │   └── FeedPostCard.jsx    # Standard feed post card
│   ├── SubscriberPostCard/
│   │   ├── SubscriberPostCard.jsx
│   │   └── ConfettiHeader.jsx  # Animated confetti header
│   └── DaySelector/
│       └── DaySelector.jsx      # Day selection component
├── context/
│   └── ThemeContext.jsx        # Theme management context
└── utils/
    └── constants.js            # Mock data and constants
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build

Create a production build:

```bash
npm run build
```

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=build
   ```

   Or drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop).

### Other Platforms

The `build` folder contains the production-ready static files that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any other static hosting service

## Features Breakdown

### Sidebar States

- **Normal State**: Fully interactive sidebar with day selector
- **Locked State**: Sidebar content is blurred and interactions are disabled
- **Blur State**: Applied when locked, uses CSS `backdrop-filter` for blur effect

### Day Selector

- Click on any day (Mon-Sun) to select it
- Active day shows with accent color and white indicator
- Smooth transitions when switching days
- Disabled when sidebar is locked

### Theme System

- Toggle between light and dark modes using the button in the header
- Theme preference is saved to localStorage
- Smooth color transitions when switching themes
- All components use CSS custom properties for theme-aware styling

### Responsive Design

- **Desktop (>1024px)**: Full sidebar and content layout
- **Tablet (768px-1024px)**: Adjusted spacing, sidebar remains visible
- **Mobile (<768px)**: Sidebar becomes a drawer/overlay, accessible via menu button

## Technologies Used

- React 19.2.4
- CSS3 (Custom Properties, Animations, Backdrop Filter)
- Canvas API (for confetti animation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Planning Document

See [PLAN.md](./PLAN.md) for detailed planning and implementation approach.

## License

This project was created for the TagMango assignment.
