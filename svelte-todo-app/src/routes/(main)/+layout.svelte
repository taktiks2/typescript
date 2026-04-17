<script lang="ts">
	import { AppShell, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>ホーム</AppRailAnchor>
			<AppRailAnchor href="/user" selected={$page.url.pathname === '/user'}>ユーザー</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">page footer</svelte:fragment>
</AppShell>
