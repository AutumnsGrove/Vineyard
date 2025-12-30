<!--
  CodeExample.svelte
  Syntax-highlighted code block with copy functionality

  Usage:
  <CodeExample language="typescript" filename="src/routes/+layout.svelte">
    {codeString}
  </CodeExample>
-->
<script lang="ts">
  import type { CodeExampleProps } from '../../types/index.js';
  import type { Snippet } from 'svelte';

  interface Props extends CodeExampleProps {
    children: Snippet;
  }

  let { language, filename, children }: Props = $props();

  // TODO: Implement code example
  // - Syntax highlighting (consider shiki or prism)
  // - Copy to clipboard button
  // - Optional filename display
  // - Scrollable for long code
  // - Line numbers (optional)

  function copyCode() {
    // TODO: Implement copy functionality
  }
</script>

<div class="code-example" data-language={language}>
  <!-- STUB: Header with filename and copy button -->
  <header class="code-header">
    {#if filename}
      <span class="filename">{filename}</span>
    {/if}
    <span class="language">{language}</span>
    <button class="copy-btn" onclick={copyCode}>Copy</button>
  </header>

  <!-- STUB: Code content -->
  <pre class="code-content"><code>{@render children()}</code></pre>
</div>

<style>
  /* STUB: Styles to be implemented */
  .code-example {
    /* Code block container */
  }

  .code-header {
    /* Header with filename/language */
  }

  .code-content {
    /* Scrollable code area */
  }
</style>
