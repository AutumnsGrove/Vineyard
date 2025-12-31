# TODOs for Vineyard

## Phase 0 - Scaffolding (COMPLETE)
- [x] Create project structure (src/lib/components/vineyard/)
- [x] Initialize package.json for Svelte 5 component library
- [x] Create TypeScript types for component props
- [x] Create stub components (7 total)
- [x] Create component index.ts with exports
- [x] Update AGENT.md with project details

## Phase 1 - Core Components (COMPLETE)
- [x] Implement StatusBadge with proper styling (5 statuses)
- [x] Implement VineyardLayout with hero section and Grove aesthetic
- [x] Implement FeatureCard with icon support (lucide-svelte)
- [x] Implement DemoContainer with mock data indicator
- [x] Implement CodeExample with syntax highlighting
- [x] Implement TierGate with tier comparison logic
- [x] Implement RoadmapSection with visual timeline

## Phase 2 - Styling & Design (COMPLETE)
- [x] Add Grove glassmorphism styles
- [x] Implement warm color palette from Foliage
- [x] Add Lexend font configuration
- [x] Create responsive layouts (mobile-first)
- [x] Add hover effects and transitions

## Phase 3 - Integration
- [ ] Add to Lattice (@autumnsgrove/groveengine)
- [ ] Test exports from @autumnsgrove/groveengine/vineyard
- [ ] Create example Vineyard page (Amber or Foliage)
- [ ] Document component usage patterns

## Phase 4 - Polish
- [ ] Add copy-to-clipboard for CodeExample
- [ ] Add pulse animation for in-development status
- [ ] Add unit tests for components
- [ ] Add Storybook or similar for component preview
- [ ] Write component documentation

## Notes
- Components use Svelte 5 runes ($state, $derived, $props)
- Target export: `@autumnsgrove/groveengine/vineyard`
- Follow Grove aesthetic: warm, glassmorphism, nature-inspired
