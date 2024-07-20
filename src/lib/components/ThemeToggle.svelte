<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';

  let theme: 'light' | 'dark' = 'light';

  onMount(() => {
    theme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark');
  }
</script>

<Button class="fixed bottom-4 right-4" on:click={toggleTheme} variant="outline">
  {theme === 'light' ? '🌙' : '☀️'}
</Button>
