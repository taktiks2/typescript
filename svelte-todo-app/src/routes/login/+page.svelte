<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1>ログイン</h1>
<form method="post" use:enhance>
	<label>
		<input type="email" placeholder="Email" name="email" required />
	</label>
	<label>
		<input type="password" placeholder="Password" name="password" required />
	</label>
	<button type="submit">ログイン</button>
</form>
<a href="/register">新規登録</a>
