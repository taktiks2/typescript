<script lang="ts">
	import UserList from '../../../components/UserList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>ユーザー一覧</h1>
<a href="/user/new">新規ユーザー作成</a>
<UserList users={data.users} />
