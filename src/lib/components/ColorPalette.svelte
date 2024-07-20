<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F1', '#33FFF1'];
  let selectedColor = '';

  function selectColor(color: string) {
    selectedColor = color;
  }

  function addColor() {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colors = [...colors, newColor];
  }
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-2">
    {#each colors as color}
      <button
        class="w-10 h-10 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        style="background-color: {color};"
        on:click={() => selectColor(color)}
      ></button>
    {/each}
  </div>
  <Button on:click={addColor}>Add Random Color</Button>
  {#if selectedColor}
    <p>Selected color: <span style="color: {selectedColor};">{selectedColor}</span></p>
  {/if}
</div>
