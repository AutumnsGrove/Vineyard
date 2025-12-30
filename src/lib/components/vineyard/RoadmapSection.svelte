<!--
  RoadmapSection.svelte
  Displays feature roadmap with built, in-progress, and planned items

  Usage:
  <RoadmapSection
    built={['Core storage view', 'Usage breakdown']}
    inProgress={['Export functionality']}
    planned={['Bulk delete', 'Storage alerts']}
  />
-->
<script lang="ts">
  import type { RoadmapSectionProps } from '../../types/index.js';

  let { built, inProgress, planned }: RoadmapSectionProps = $props();

  // TODO: Implement roadmap section
  // - Visual timeline or checklist style
  // - Different icons for each status
  // - Checkmark for built, arrow for in-progress, circle for planned
</script>

<section class="roadmap-section">
  <!-- STUB: Built items -->
  {#if built.length > 0}
    <div class="roadmap-group roadmap-built">
      <h4>Built</h4>
      <ul>
        {#each built as item}
          <li>
            <span class="icon">✓</span>
            {item}
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <!-- STUB: In Progress items -->
  {#if inProgress.length > 0}
    <div class="roadmap-group roadmap-in-progress">
      <h4>In Progress</h4>
      <ul>
        {#each inProgress as item}
          <li>
            <span class="icon">→</span>
            {item}
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <!-- STUB: Planned items -->
  {#if planned.length > 0}
    <div class="roadmap-group roadmap-planned">
      <h4>Planned</h4>
      <ul>
        {#each planned as item}
          <li>
            <span class="icon">○</span>
            {item}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</section>

<style>
  /* STUB: Styles to be implemented */
  .roadmap-section {
    /* Section container */
  }

  .roadmap-group {
    /* Group container */
  }

  .roadmap-built .icon {
    /* Green checkmark */
  }

  .roadmap-in-progress .icon {
    /* Orange arrow */
  }

  .roadmap-planned .icon {
    /* Gray circle */
  }
</style>
