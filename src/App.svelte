<script>
	import Info from './User.svelte';
	import Todo from './Todo.svelte';

	export let name;

	let todos = [
		{ id: '0', name: 'todo1', description: 'do this first', complete: false },
		{ id: '1', name: 'todo2', description: 'do this second', complete: false }
	]

	let user;

	function login() {
		user = {
			username: 'jeffd23',
		}
	}

	function logout() {
		user = null;
	}
</script>

<style>
	main { 
		padding: 5%;
		text-align: center;
	}
</style>

<svelte:head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
</svelte:head>

<main class="content">
{#if user}
	<h2>Logged in as {user.username}</h2>
	<button on:click={logout} class="button">
		Log out
	</button>

	<hr>

	<h2>My Todos</h2>

	{#each todos as todo}
		<Todo {...todo} />
		<hr>
	{/each}

{:else}
	<button on:click={login} class="button is-success">
		Log in
	</button>
{/if}


</main>

