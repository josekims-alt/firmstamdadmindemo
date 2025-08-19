# FirmStamp Next.js Starter (App Router + TS + Tailwind)

This is a clean, production-ready Next.js front-end scaffold tailored for the FirmStamp platform. It’s structured to map 1:1 with your Figma Dev Mode specs.

## What’s inside
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with design tokens in `src/styles/tokens.css` (drop your Figma colors, radii, etc. here)
- Minimal, reusable UI primitives (Button, Card, Input, Tabs, Table, Modal, StepList)
- Opinionated pages matching a typical email signature platform:
  - `/dashboard`
  - `/onboarding` (6-step wizard to match your flow)
  - `/signatures`, `/templates`, `/campaigns`, `/analytics`, `/settings`

## Quick start
```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev / yarn dev
```

Open http://localhost:3000

## Map Figma → Code
1. **Tokens:** Replace HSL values in `src/styles/tokens.css` with Figma Dev Mode tokens (brand, neutrals, accents, radius).
2. **Typography:** If your Figma uses a different font, import via `next/font` in `src/app/layout.tsx`.
3. **Spacing & Radius:** Tokens are wired in `tailwind.config.ts` (`--radius`) and CSS variables.
4. **Components:** Update primitives for exact shadows, borders, and corner rounding per Figma.
5. **Pages:** Adjust markup in each page to mirror your frames sections and auto-layout structure.

## Notes
- This starter is UI-only (no backend or OAuth). Wire your real auth/sync calls where buttons are placed.
- All components are accessible, keyboard-friendly, and responsive-ready.
- Keep your design system centralized via `tokens.css` and Tailwind theme extensions.
