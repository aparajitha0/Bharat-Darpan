# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Incredible India (`artifacts/incredible-india`)
- **Type**: React + Vite (frontend only, no backend)
- **Preview path**: `/`
- **Purpose**: Cultural heritage website for India with an interactive political map
- **Pages**:
  - `/` — Home page with clickable SVG political map of all Indian states and a state list
  - `/state/:stateId` — Individual state page with cultural info sections (About, Culture, Cuisine, Festivals, Heritage, Gallery)
- **State data**: `src/data/states.ts` — all 28 states + 8 UTs with quick facts and placeholder content
- **Map**: `src/components/IndiaMap.tsx` — SVG political map with hover tooltips and click navigation
- **Theme**: Saffron/orange primary, emerald green accent, warm cream background; Cinzel + Lora fonts

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
