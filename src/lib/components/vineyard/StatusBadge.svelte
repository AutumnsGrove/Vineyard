<!--
  StatusBadge.svelte
  Consistent status indicator across all Vineyard pages

  Usage:
  <StatusBadge status="coming-soon" />

  Status types:
  - ready: Green, solid - Production-ready
  - preview: Yellow, dashed border - Functional but may change
  - demo: Blue, labeled - Working example, not real data
  - coming-soon: Gray, subtle - Designed, not yet built
  - in-development: Orange, pulsing - Actively being built
-->
<script lang="ts">
  import type { StatusBadgeProps } from '../../types/index.js';

  let { status }: StatusBadgeProps = $props();

  // TODO: Implement status badge
  // - Different colors/styles per status
  // - Consistent sizing
  // - Optional pulse animation for in-development

  const labels: Record<string, string> = {
    'ready': 'Ready',
    'preview': 'Preview',
    'demo': 'Demo',
    'coming-soon': 'Coming Soon',
    'in-development': 'In Development'
  };
</script>

<span class="status-badge" data-status={status}>
  {labels[status] ?? status}
</span>

<style>
  /* STUB: Styles to be implemented */
  .status-badge {
    /* Badge base styles */
  }

  .status-badge[data-status="ready"] {
    /* Green, solid */
  }

  .status-badge[data-status="preview"] {
    /* Yellow, dashed border */
  }

  .status-badge[data-status="demo"] {
    /* Blue, labeled */
  }

  .status-badge[data-status="coming-soon"] {
    /* Gray, subtle */
  }

  .status-badge[data-status="in-development"] {
    /* Orange, pulsing */
  }
</style>
