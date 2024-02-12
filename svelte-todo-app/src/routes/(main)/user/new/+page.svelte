<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
</script>

<h1>ユーザー作成</h1>
<a href="/user">ユーザー一覧</a>

<form
	method="post"
	use:enhance={() => {
		// ここの処理はすべてクライアント
		return async ({ result }) => {
			if (result.type === 'redirect') {
				await goto(result.location);
			}
		};
	}}
>
	<label>
		<input type="text" name="name" placeholder="名前" required />
	</label>
	<label>
		<input type="number" name="age" placeholder="年齢" required />
	</label>
	<label>
		<input type="email" name="email" placeholder="メールアドレス" required />
	</label>
	<button type="submit">作成</button>
</form>
