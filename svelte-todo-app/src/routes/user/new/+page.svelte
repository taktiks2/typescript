<script lang="ts">
	import { goto } from '$app/navigation';

	async function handleSubmit(event: Event) {
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const res = await fetch(form.action, {
			method: 'POST',
			body: formData
		});

		if (res.ok) {
			goto('/user');
		} else {
			console.error('フォームの送信に失敗しました');
		}
	}
</script>

<h1>ユーザー作成</h1>
<a href="/user">ユーザー一覧</a>

<form on:submit|preventDefault={handleSubmit}>
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
