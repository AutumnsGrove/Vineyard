<!--
  TierGate.svelte
  Conditionally shows content based on user tier

  Usage:
  <TierGate required="oak" current={userTier}>
    <AdvancedFeature />
    <UpgradePrompt slot="fallback" />
  </TierGate>

  Tiers (lowest to highest):
  - seedling
  - sapling
  - oak
  - grove
-->
<script lang="ts">
  import type { TierGateProps, GroveTier } from '../../types/index.js';
  import type { Snippet } from 'svelte';

  interface Props extends TierGateProps {
    children: Snippet;
    fallback?: Snippet;
  }

  let { required, current, children, fallback }: Props = $props();

  // TODO: Implement tier gate logic
  // - Compare tier levels
  // - Show content or fallback
  // - Optional blur effect on gated content

  const tierLevels: Record<GroveTier, number> = {
    seedling: 0,
    sapling: 1,
    oak: 2,
    grove: 3
  };

  const hasAccess = $derived(tierLevels[current] >= tierLevels[required]);
</script>

<div class="tier-gate" data-required={required} data-has-access={hasAccess}>
  {#if hasAccess}
    {@render children()}
  {:else if fallback}
    {@render fallback()}
  {:else}
    <!-- STUB: Default fallback -->
    <div class="tier-gate-fallback">
      <p>This feature requires {required} tier or higher.</p>
    </div>
  {/if}
</div>

<style>
  /* STUB: Styles to be implemented */
  .tier-gate {
    /* Container styles */
  }

  .tier-gate-fallback {
    /* Default fallback styling */
  }
</style>
