<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
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
		<input type="text" name="name" value={$page.data.user.name} required />
	</label>
	<label>
		<input type="number" name="age" value={$page.data.user.age} required />
	</label>
	<label>
		<input type="email" name="email" value={$page.data.user.email} required />
	</label>
	<button type="submit">確定</button>
</form>
