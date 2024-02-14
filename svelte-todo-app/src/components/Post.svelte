<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Post } from '$lib/apiTypes';

	export let post: Post;
	export let onUpdate: () => Promise<void>;

	let isEditing = false;

	function handleModeChange() {
		isEditing = !isEditing;
	}
</script>

<form
	method="post"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === 'success') {
				await onUpdate();
				handleModeChange();
			}
		};
	}}
>
	<input type="hidden" name="id" value={post.id} />
	<input type="hidden" name="authorId" value={post.authorId} />
	{#if isEditing}
		<div>
			<input type="text" placeholder="Email" name="title" value={post.title} required />
		</div>
		<div>
			<textarea placeholder="Text" name="text" value={post.text} required />
		</div>
		<select name="status" value={post.status}>
			<option value="todo">TODO</option>
			<option value="progress">PROGRESS</option>
			<option value="done">DONE</option>
		</select>
		<div>
			<button on:click={handleModeChange}>キャンセル</button>
			<button formaction="?/edit">更新</button>
		</div>
	{:else}
		<h2>{post.title}</h2>
		<p>{post.text}</p>
		<p>{post.status}</p>
		<button on:click={handleModeChange}>編集</button>
		<button formaction="?/delete">削除</button>
	{/if}
</form>
