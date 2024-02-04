<script lang="ts">
	import { getAPIClient } from '$lib/apiClient';
	import type { User } from '$lib/apiTypes';

	const apiClient = getAPIClient();

	export let users: User[];

	// const handleEdit = async (id: number) => {
	// 	// TODO: ユーザー編集ページに遷移する
	// };

	const handleDelete = async (id: number) => {
		// TODO: アラートを出して確認する
		await apiClient.deleteUser(id);
		// TODO: ユーザー一覧を再取得する
	};
</script>

<ul>
	{#each users as user}
		<li>名前:{user.name}</li>
		<!-- <button on:click={() => handleEdit(user.id)}>編集</button> -->
		<button on:click={() => handleDelete(user.id)}>削除</button>
	{/each}
</ul>
