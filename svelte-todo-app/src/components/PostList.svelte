<script lang="ts">
	import { getAPIClient } from '$lib/apiClient';
	import type { Post } from '$lib/apiTypes';
	import { goto } from '$app/navigation';

	const apiClient = getAPIClient();

	export let posts: Post[];

	const handleEdit = async (id: number) => {
		goto(`/post/edit/${id}`);
	};

	const handleDelete = async (id: number) => {
		// TODO: バックエンドで削除のリクエストを実行する
		if (confirm('本当に削除しますか？')) {
			await apiClient.deletePost('' + id);
		}
		posts = await apiClient.getPosts();
	};
</script>

{#each posts as post}
	<div>
		<p>========================================</p>
		<h2>{post.title}</h2>
		<p>{post.text}</p>
		<button on:click={() => handleEdit(post.id)}>編集</button>
		<button on:click={() => handleDelete(post.id)}>削除</button>
	</div>
{/each}
