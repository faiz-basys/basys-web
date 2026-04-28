## Basys AI Landing Page

This repository contains the Basys AI company landing page built with Next.js (App Router) and Tailwind CSS.

## Project Direction

- Convert provided HTML into Next.js components.
- Use Tailwind CSS for styling and layout.
- Extract and reuse shared components wherever possible (for example: `Navbar`, `Footer`, `Button`, and section components).
- Keep the code modular and easy to extend as new landing page sections are added.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

You can start by editing `app/page.tsx` and adding shared components under a dedicated components directory (for example `components/`).

## Recommended Structure

- `app/` for routes and page composition.
- `components/` for reusable UI and landing sections.
- `public/` for static assets (logos, icons, images).
- `DESIGN.md` for brand and style guidance.

## Styling Notes

- Follow the visual and brand guidance in `DESIGN.md`.
- Use utility-first Tailwind classes and reusable component APIs instead of repeating raw markup.
- Keep components focused and composable.

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
