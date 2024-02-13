<script lang="ts">
	import PostList from '../../components/PostList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: todoList = data.posts.filter((post) => post.status === 'todo');
	$: progressList = data.posts.filter((post) => post.status === 'progress');
	$: doneList = data.posts.filter((post) => post.status === 'done');
</script>

<div>
	<p>========================================</p>
	<h1>TODO</h1>
	<p>========================================</p>
	<PostList posts={todoList} />
</div>
<div>
	<p>========================================</p>
	<h1>PROGRESS</h1>
	<p>========================================</p>
	<PostList posts={progressList} />
</div>
<div>
	<p>========================================</p>
	<h1>DONE</h1>
	<p>========================================</p>
	<PostList posts={doneList} />
</div>
