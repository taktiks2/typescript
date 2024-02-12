<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>ユーザー編集</h1>
<a href="/user">ユーザー一覧</a>

<form
	method="post"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === 'redirect') {
				await goto(result.location);
			}
		};
	}}
>
	<label>
		<input type="text" name="name" value={data.user.username} required />
	</label>
	<label>
		<input type="email" name="email" value={data.user.email} required />
	</label>
	<button type="submit">確定</button>
</form>
