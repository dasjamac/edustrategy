# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EducationStrategy is a Russian-language landing page + career quiz for helping Russian-speaking students navigate European university programs (Belgium, Netherlands, France). Hosted on Lovable, deployed at `edustrategy.lovable.app`.

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run lint         # ESLint
npm run test         # Run tests once (vitest)
npm run test:watch   # Watch mode tests
```

## Architecture

**Stack:** React 18 + TypeScript + Vite (SWC) + Tailwind CSS + shadcn/ui + Framer Motion

**Routing:** React Router DOM with two routes:
- `/` → `src/pages/Index.tsx` (landing page)
- `/quiz` → `src/pages/Quiz.tsx` (career assessment quiz, ~29KB monolith)

**Path alias:** `@/` → `./src/` (configured in `vite.config.ts` and `tsconfig.app.json`)

**Landing page sections** (`src/components/landing/`): Header, Hero, WhyProgramMatters, Services, Differentiation, WhoIsFor, Credibility, CTA, Footer — composed in `Index.tsx`.

**UI components** (`src/components/ui/`): Full shadcn/ui library. Button component has custom variants beyond defaults: `gold`, `goldOutline`, `hero`, `heroOutline`, `navy` — defined via `class-variance-authority` in `button.tsx`.

## Design System

All colors use HSL CSS variables defined in `src/index.css`. Key custom tokens:
- `--navy` / `--navy-deep` / `--navy-light` — primary brand color (deep navy)
- `--gold` / `--gold-light` — accent color
- `--ivory` / `--ivory-dark` — background tones

Custom Tailwind utilities in `index.css`: `text-gradient-gold`, `bg-hero-gradient`, `bg-gold-gradient`, `shadow-soft`, `shadow-card`, `shadow-elevated`.

Typography: Playfair Display (headings via `font-serif`), Inter (body via `font-sans`). Imported via Google Fonts in `index.css`.

## Deployment

Lovable auto-deploys from the `main` branch. External GitHub commits may require a manual sync in the Lovable UI. The `lovable-tagger` dev plugin adds component tags in development mode only.

## Language

All user-facing content is in Russian. Code, comments, and component names are in English.
