<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';

  let username = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let error = '';

  async function handleSubmit() {
    if (password !== confirmPassword) {
      error = "Passwords don't match";
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (signUpError) {
      error = signUpError.message;
    } else {
      // Redirect to dashboard or show success message
      window.location.href = '/dashboard';
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto">
  <div class="space-y-4">
    <div>
      <Label for="username">Username</Label>
      <Input
        type="text"
        id="username"
        bind:value={username}
        placeholder="Enter your username"
        required
      />
    </div>
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
    <div>
      <Label for="confirm-password">Confirm Password</Label>
      <Input
        type="password"
        id="confirm-password"
        bind:value={confirmPassword}
        placeholder="Confirm your password"
        required
      />
    </div>
    {#if error}
      <p class="text-red-500">{error}</p>
    {/if}
    <Button type="submit" class="w-full">Register</Button>
  </div>
</form>
