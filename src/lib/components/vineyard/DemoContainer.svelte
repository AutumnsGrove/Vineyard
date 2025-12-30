<!--
  DemoContainer.svelte
  Wrapper for interactive demo content

  Usage:
  <DemoContainer
    title="Theme Picker Demo"
    description="Try switching between curated themes"
    mockData={true}
  >
    <ThemePicker themes={sampleThemes} />
  </DemoContainer>
-->
<script lang="ts">
  import type { DemoContainerProps } from '../../types/index.js';
  import type { Snippet } from 'svelte';

  interface Props extends DemoContainerProps {
    children: Snippet;
  }

  let { title, description, mockData = false, children }: Props = $props();

  // TODO: Implement demo container
  // - Title bar with optional "Mock Data" indicator
  // - Description text
  // - Bordered container for demo content
  // - Optional reset/refresh button
</script>

<div class="demo-container" class:mock-data={mockData}>
  <!-- STUB: Header -->
  <header class="demo-header">
    <h4>{title}</h4>
    {#if mockData}
      <span class="mock-indicator">Mock Data</span>
    {/if}
  </header>

  <!-- STUB: Description -->
  {#if description}
    <p class="demo-description">{description}</p>
  {/if}

  <!-- STUB: Demo content -->
  <div class="demo-content">
    {@render children()}
  </div>
</div>

<style>
  /* STUB: Styles to be implemented */
  .demo-container {
    /* Container styling */
  }

  .mock-indicator {
    /* Small label indicating mock data */
  }
</style>
