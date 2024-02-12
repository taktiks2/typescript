<script lang="ts">
	import PostList from '../../components/PostList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<p>========================================</p>
	<h1>TODO</h1>
	<p>========================================</p>
	<PostList posts={data.posts} />
</div>
<div>
	<p>========================================</p>
	<h1>PROGRESS</h1>
	<p>========================================</p>
	<PostList posts={data.posts} />
</div>
<div>
	<p>========================================</p>
	<h1>DONE</h1>
	<p>========================================</p>
	<PostList posts={data.posts} />
</div>
