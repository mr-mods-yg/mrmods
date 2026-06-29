# Portfolio - Yash Garg (mrmods)

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. Showcases projects, skills, GitHub activity, and contact information in a sleek, animated interface.

## Tech Stack

| Category       | Technologies                                                                 |
| -------------- | ---------------------------------------------------------------------------- |
| **Framework**  | Next.js 15 (App Router, Turbopack)                                           |
| **Language**   | TypeScript                                                                   |
| **Styling**    | Tailwind CSS v4, `tw-animate-css`                                            |
| **Animation**  | Framer Motion, Motion                                                         |
| **UI**         | Radix UI Slot, shadcn/ui style components, Lucide Icons                      |
| **Theme**      | next-themes (light / dark / system)                                          |
| **Data**       | react-github-calendar (GitHub contribution graph)                             |
| **Analytics**  | Umami (privacy-friendly)                                                     |
| **Linting**    | ESLint 9, eslint-config-next                                                  |
| **Font**       | Geist (by Vercel) via `next/font`                                            |

## Features

- **Hero Section** - Animated introduction with call-to-action
- **About Section** - Personal bio and background
- **Tech Stack** - Visual display of skills and technologies
- **Projects** - Showcase of personal and professional projects
- **GitHub Activity** - Live contribution calendar integration
- **Badges & Achievements** - Credentials and milestones
- **Contact Section** - Get in touch form/links
- **Dark/Light Mode** - System-aware theme switching with next-themes
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - Page transitions and scroll-triggered animations via Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/mr-mods-yg/mrmods.git
cd mrmods

# Install dependencies
npm install

# Start the development server (port 3400)
npm run dev
```

Open [http://localhost:3400](http://localhost:3400) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
mrmods/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles & Tailwind imports
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   ├── page.tsx         # Home page (assembles all sections)
│   │   ├── loading.tsx      # Loading state
│   │   └── projects/        # Projects sub-page
│   ├── components/
│   │   ├── custom/          # Custom components (projects, etc.)
│   │   ├── ui/              # Reusable UI primitives (shadcn-style)
│   │   └── theme-provider.tsx
│   ├── data/
│   │   └── skills.ts        # Skills data
│   ├── lib/                 # Utility functions
│   └── sections/            # Page sections
│       ├── hero-bar.tsx
│       ├── about-section.tsx
│       ├── tech-stack.tsx
│       ├── badge-section.tsx
│       ├── github-section.tsx
│       └── contact-section.tsx
├── components.json           # shadcn/ui configuration
├── next.config.ts
├── tailwind.config.*
└── tsconfig.json
```

## Deployment

The easiest way to deploy is on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository into Vercel
3. Vercel auto-detects Next.js — no extra configuration needed

Or deploy to any platform that supports Node.js.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with [Next.js](https://nextjs.org/) & [Tailwind CSS](https://tailwindcss.com/) | Designed & developed by [Yash Garg](https://github.com/mr-mods-yg)
