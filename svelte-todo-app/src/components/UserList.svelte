<script lang="ts">
	import { getAPIClient } from '$lib/apiClient';
	import type { User } from '$lib/apiTypes';
	import { goto } from '$app/navigation';

	const apiClient = getAPIClient();

	export let users: User[];

	const handleEdit = async (id: number) => {
		goto(`/user/edit/${id}`);
	};

	const handleDelete = async (id: number) => {
		// TODO: バックエンドで削除のリクエストを実行する
		if (confirm('本当に削除しますか？')) {
			await apiClient.deleteUser('' + id);
		}
		users = await apiClient.getUsers();
	};
</script>

<ul>
	{#each users as user}
		<p>========================================</p>
		<li>名前:{user.username}</li>
		<li>メールアドレス:{user.email}</li>
		<button on:click={() => handleEdit(user.id)}>編集</button>
		<button on:click={() => handleDelete(user.id)}>削除</button>
	{/each}
</ul>
