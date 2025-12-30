<!--
  VineyardLayout.svelte
  Main layout wrapper for Vineyard showcase pages

  Usage:
  <VineyardLayout tool="amber" tagline="Your files, preserved" status="preview">
    <slot />
  </VineyardLayout>
-->
<script lang="ts">
  import type { VineyardLayoutProps } from '../../types/index.js';
  import type { Snippet } from 'svelte';

  interface Props extends VineyardLayoutProps {
    children: Snippet;
  }

  let { tool, tagline, status, children }: Props = $props();

  // TODO: Implement layout structure
  // - Hero section with tool name, tagline, status badge
  // - Philosophy quote from grove-naming
  // - Navigation for Vineyard sections
  // - Footer with related tools
</script>

<div class="vineyard-layout" data-tool={tool} data-status={status}>
  <!-- STUB: Hero section -->
  <header class="vineyard-hero">
    <h1>{tool}</h1>
    <p class="tagline">{tagline}</p>
    <!-- StatusBadge goes here -->
  </header>

  <!-- STUB: Main content area -->
  <main class="vineyard-content">
    {@render children()}
  </main>

  <!-- STUB: Footer -->
  <footer class="vineyard-footer">
    <!-- Related tools links -->
  </footer>
</div>

<style>
  /* STUB: Styles to be implemented */
  .vineyard-layout {
    /* Grove glassmorphism styling */
  }
</style>
