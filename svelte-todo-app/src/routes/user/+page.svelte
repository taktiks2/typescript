<script lang="ts">
	import UserList from '../../components/UserList.svelte';
	import { page } from '$app/stores';
</script>

<h1>ユーザー一覧</h1>
<a href="/user/new">新規ユーザー作成</a>
<UserList users={$page.data.users} />
