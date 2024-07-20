<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';

  let email = '';
  let password = '';
  let error = '';

  async function handleSubmit() {
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      error = signInError.message;
    } else {
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto">
  <div class="space-y-4">
    <div>
      <Label for="email">Email</Label>
      <Input type="email" id="email" bind:value={email} placeholder="Enter your email" required />
    </div>
    <div>
      <Label for="password">Password</Label>
      <Input
        type="password"
        id="password"
        bind:value={password}
        placeholder="Enter your password"
        required
      />
    </div>
    {#if error}
      <p class="text-red-500">{error}</p>
    {/if}
    <Button type="submit" class="w-full">Log In</Button>
  </div>
</form>
