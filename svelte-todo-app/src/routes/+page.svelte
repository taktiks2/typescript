<script lang="ts">
	import PostList from '../components/PostList.svelte';
	import * as apiTypes from '$lib/apiTypes';

	export let posts: apiTypes.Post[] = [
		{
			id: 1,
			title: 'test title',
			text: 'test text',
			status: 'todo',
			postedAt: '2024-01-01 00:00:00'
		},
		{
			id: 2,
			title: 'test title',
			text: 'test text',
			status: 'todo',
			postedAt: '2024-01-01 00:00:00'
		},
		{
			id: 3,
			title: 'test title',
			text: 'test text',
			status: 'todo',
			postedAt: '2024-01-01 00:00:00'
		}
	];
</script>

<div>
	<p>========================================</p>
	<h1>TODO</h1>
	<p>========================================</p>
	<PostList {posts} />
</div>
<div>
	<p>========================================</p>
	<h1>PROGRESS</h1>
	<p>========================================</p>
	<PostList {posts} />
</div>
<div>
	<p>========================================</p>
	<h1>DONE</h1>
	<p>========================================</p>
	<PostList {posts} />
</div>
