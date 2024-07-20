<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase';

  let theme: 'light' | 'dark' = 'light';
  let user: any = null;

  onMount(async () => {
    theme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    const { data } = await supabase.auth.getUser();
    user = data.user;
  });

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark');
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    user = null;
    window.location.href = '/';
  }
</script>

<header class="bg-white dark:bg-gray-800 shadow">
  <nav class="container mx-auto px-4 py-2 flex justify-between items-center">
    <a href="/" class="text-xl font-bold">CreativeMoodBoard</a>
    <div class="flex items-center space-x-4">
      {#if user}
        <Button variant="link" href="/dashboard">Dashboard</Button>
        <Button variant="link" href="/moodboard">MoodBoard</Button>
        <Button variant="link" href="/profile">Profile</Button>
        <Button on:click={handleLogout}>Logout</Button>
      {:else}
        <Button variant="link" href="/login">Login</Button>
        <Button variant="link" href="/register">Register</Button>
      {/if}
      <Button on:click={toggleTheme} variant="outline">
        {theme === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  </nav>
</header>
