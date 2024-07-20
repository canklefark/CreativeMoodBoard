<script lang="ts">
  import { supabase } from '$lib/supabase';
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';

  export let id: number;
  export let title: string;
  export let description: string;

  let isEditing = false;
  let editedTitle = title;
  let editedDescription = description;

  async function toggleEdit() {
    if (isEditing) {
      const { data, error } = await supabase
        .from('mood_boards')
        .update({ title: editedTitle, description: editedDescription })
        .eq('id', id);

      if (error) {
        console.error('Error updating mood board:', error);
      } else {
        title = editedTitle;
        description = editedDescription;
      }
    }
    isEditing = !isEditing;
  }
</script>

<Card>
  <CardHeader>
    {#if isEditing}
      <input bind:value={editedTitle} class="text-2xl font-bold w-full mb-2 p-1 border rounded" />
      <textarea bind:value={editedDescription} class="w-full p-1 border rounded"></textarea>
    {:else}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    {/if}
  </CardHeader>
  <CardContent>
    <div class="aspect-video bg-gray-200 rounded-md mb-4"></div>
  </CardContent>
  <CardFooter class="flex justify-between">
    <Button variant="outline" on:click={toggleEdit}>
      {isEditing ? 'Save' : 'Edit'}
    </Button>
    <Button>View</Button>
  </CardFooter>
</Card>
