# usePopcorn

A modern React application to help users search for their favorite IMDB movies and save them to a watch list with their own ratings. Built with cutting-edge web technologies and optimized for deployment on Cloudflare Workers.

## Live Demo

To access the live site, please [click here](https://popcorn.kevinwessa.com)

## Features

- Real-time IMDB movie search
- Personal watch list with custom ratings
- LocalStorage for persistent data
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Lightning-fast dev experience with Vite HMR (Hot Module Replacement)
- Production-optimized builds with automatic code splitting
- Code quality enforcement with Biome

## Tech Stack

- **Vite 7** - Next-generation frontend tooling with instant HMR
- **React 19** - UI library with modern hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Modern utility-first CSS framework with native CSS layer system
- **Biome** - Fast linter and formatter for JavaScript/TypeScript
- **pnpm** - Fast, disk space efficient package manager
- **Cloudflare Workers** - Edge deployment with Workers Static Assets

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

```bash
pnpm install
```

### Development

Start the Vite dev server with hot module replacement:

```bash
pnpm dev
```

The site will open automatically at `http://localhost:5173` with instant hot reload.

### Code Quality

Check code for issues:

```bash
pnpm check
```

Auto-fix issues:

```bash
pnpm fix
```

### Production Build

Build optimized static assets for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

### Deployment

Deploy to Cloudflare Workers:

```bash
wrangler deploy
```

The site will be deployed to Cloudflare's global edge network with automatic SSL and CDN.

## Roadmap

The development journey for usePopcorn is outlined as follows:

### Initial Version ✓

- A simple version with static data
- A clean UI to demonstrate proof of concept

### Beta Version (In Progress)

- Mobile responsiveness
- Configuration with IMDB API for real data usage
- LocalStorage for saving results

### Post-Beta Plans

- Authentication so users could save their results
- User profiles and sharing capabilities
- Advanced filtering and sorting options

## License

This project is open source under the ISC License.
