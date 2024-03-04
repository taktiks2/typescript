<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1>ログイン</h1>
<form method="post" use:enhance>
	<label>
		<input class="input" type="email" height="50" placeholder="Email" name="email" required />
	</label>
	<label>
		<input class="input" type="password" placeholder="Password" name="password" required />
	</label>
	<button type="submit" class="btn variant-filled">ログイン</button>
</form>
<a class="btn variant-filled" href="/register">新規登録</a>
