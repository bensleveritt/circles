<script lang="ts">
  import { useAccount } from "$lib/jazz";

  const account = useAccount({
    root: {},
  });
</script>

<div class="container">
  <h1>Welcome back, {account?.me?.profile?.name}</h1>
  <button onclick={() => account.logOut()}>Log out</button>
</div>

You aren't part of any circles.

<button>Create your first circle</button>
