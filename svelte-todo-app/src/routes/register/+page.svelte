<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>ユーザー新規作成</h1>
{#if form?.message === 'exists'}
	<p>emailは既に登録されています</p>
{/if}
<form method="post" use:enhance>
	<label>
		<input type="text" placeholder="Username" name="username" required />
	</label>
	<label>
		<input type="email" placeholder="Email" name="email" required />
	</label>
	<label>
		<input type="password" placeholder="Password" name="password" required />
	</label>
	<button type="submit">登録</button>
</form>
<a href="/login">ログインへ</a>
