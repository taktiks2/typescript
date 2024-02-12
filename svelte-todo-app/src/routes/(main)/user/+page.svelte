<script lang="ts">
	import PostList from '../../../components/PostList.svelte';
	import PostCreate from '../../../components/PostCreate.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
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
