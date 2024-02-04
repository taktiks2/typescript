<script lang="ts">
	import type { User } from '$lib/apiTypes';

	export let users: User[];
</script>

<ul>
	{#each users as user}
		<li>名前:{user.name} 年齢:{user.age} e-mail:{user.email}</li>
	{/each}
</ul>
