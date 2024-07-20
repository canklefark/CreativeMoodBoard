<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase';
  import MoodBoardCard from './MoodBoardCard.svelte';

  let moodBoards: any[] = [];

  onMount(async () => {
    const { data, error } = await supabase
      .from('mood_boards')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching mood boards:', error);
    } else {
      moodBoards = data;
    }
  });
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each moodBoards as moodBoard (moodBoard.id)}
    <MoodBoardCard id={moodBoard.id} title={moodBoard.title} description={moodBoard.description} />
  {/each}
</div>
