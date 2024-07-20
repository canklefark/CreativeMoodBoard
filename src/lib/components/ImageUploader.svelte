<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  let files: FileList;

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      files = target.files;
    }
  }

  function handleUpload() {
    // Implement file upload logic here
    console.log('Uploading files:', files);
  }
</script>

<div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
  <input
    type="file"
    id="file-upload"
    class="hidden"
    multiple
    on:change={handleFileChange}
    accept="image/*"
  />
  <label for="file-upload" class="cursor-pointer">
    <div class="text-gray-600 mb-2">
      <span class="font-semibold">Click to upload</span> or drag and drop
    </div>
    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
  </label>
</div>

{#if files && files.length > 0}
  <div class="mt-4">
    <p>{files.length} file(s) selected</p>
    <Button on:click={handleUpload} class="mt-2">Upload</Button>
  </div>
{/if}
