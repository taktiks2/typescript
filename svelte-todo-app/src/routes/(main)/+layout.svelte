<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<nav>
			<a href="/">Home</a>
			<a href="/user">User</a>
		</nav>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">page footer</svelte:fragment>
</AppShell>
