<script lang="ts">
	import type { Post as PostData } from '$lib/apiTypes';
	import Post from './Post.svelte';

	export let posts: PostData[];
	export let onUpdate: () => Promise<void>;
</script>

{#each posts as post}
	<Post {post} {onUpdate} />
{/each}
