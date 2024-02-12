<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form method="post" use:enhance>
	<div>
		<input type="text" name="title" placeholder="title" required />
	</div>
	<div>
		<textarea name="text" placeholder="text" required />
	</div>
	<div>
		<select name="status">
			<option value="todo">TODO</option>
			<option value="progress">PROGRESS</option>
			<option value="done">DONE</option>
		</select>
	</div>
	<button type="submit" formaction="?/create">作成</button>
</form>
