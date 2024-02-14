<script lang="ts">
	import PostList from '../../../components/PostList.svelte';
	import PostCreate from '../../../components/PostCreate.svelte';
	import type { PageData } from './$types';
	import { getAPIClient } from '$lib/apiClient';

	const apiClient = getAPIClient();

	export let data: PageData;

	async function fetchPost(): Promise<void> {
		console.log('fetchpost');
		const posts = await apiClient.getPosts();
		data = { posts };
	}

	$: todoList = data.posts.filter((post) => post.status === 'todo');
	$: progressList = data.posts.filter((post) => post.status === 'progress');
	$: doneList = data.posts.filter((post) => post.status === 'done');
</script>

<h1>新規作成</h1>
<div>
	<PostCreate />
</div>
<h1>ユーザーTODOs</h1>
<div>
	<p>========================================</p>
	<h1>TODO</h1>
	<p>========================================</p>
	<PostList posts={todoList} onUpdate={fetchPost} />
</div>
<div>
	<p>========================================</p>
	<h1>PROGRESS</h1>
	<p>========================================</p>
	<PostList posts={progressList} onUpdate={fetchPost} />
</div>
<div>
	<p>========================================</p>
	<h1>DONE</h1>
	<p>========================================</p>
	<PostList posts={doneList} onUpdate={fetchPost} />
</div>
