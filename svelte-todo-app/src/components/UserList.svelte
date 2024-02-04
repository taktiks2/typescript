<script lang="ts">
	import type { User } from '$lib/apiTypes';

	export let users: User[];
</script>

<ul>
	{#each users as user}
		<li>名前:{user.name}</li>
	{/each}
</ul>
