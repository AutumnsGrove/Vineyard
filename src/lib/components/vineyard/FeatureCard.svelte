<!--
  FeatureCard.svelte
  Card component for showcasing individual features

  Usage:
  <FeatureCard
    title="Storage Overview"
    description="See usage across posts and media"
    status="ready"
    icon="HardDrive"
  >
    <DemoComponent slot="demo" />
  </FeatureCard>
-->
<script lang="ts">
  import type { FeatureCardProps } from '../../types/index.js';
  import type { Snippet } from 'svelte';

  interface Props extends FeatureCardProps {
    demo?: Snippet;
  }

  let { title, description, status, icon, demo }: Props = $props();

  // TODO: Implement feature card
  // - Icon display using lucide-svelte
  // - Status badge in corner
  // - Demo slot for interactive content
  // - Hover effects with Grove aesthetic
</script>

<article class="feature-card" data-status={status}>
  <!-- STUB: Icon -->
  {#if icon}
    <div class="feature-icon">
      <!-- lucide icon: {icon} -->
    </div>
  {/if}

  <!-- STUB: Content -->
  <div class="feature-content">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>

  <!-- STUB: Demo slot -->
  {#if demo}
    <div class="feature-demo">
      {@render demo()}
    </div>
  {/if}

  <!-- STUB: Status badge -->
  <div class="feature-status">
    <!-- StatusBadge component -->
  </div>
</article>

<style>
  /* STUB: Styles to be implemented */
  .feature-card {
    /* Card styling with glassmorphism */
  }
</style>
