<script>
	import Info from './User.svelte';
	import Todo from './Todo.svelte';
	import { onMount } from 'svelte';

	export let name;

	let todos = [
		{ id: '0', name: 'todo1', description: 'do this first', complete: false },
		{ id: '1', name: 'todo2', description: 'do this second', complete: false }
	]


	import { Auth } from './firebase';
	import { Firestore } from './firebase';

	let user;

	onMount(async () =>  {
		user = await Auth.currentUser;

		const ref = Firestore.collection('todos');

		ref.onSnapshot(snapshot => {
			console.log(snapshot)
			todos = snapshot.docs.map(doc => {
				return { ...doc.data(), id: doc.id }
			})
			console.log(todos)
		});
	});

	async function login() {
		const credential = await Auth.signInWithEmailAndPassword('bob@example.com', 'firebase23')
		user = credential.user;
		console.log(user)
	}

	async function logout() {
		Auth.signOut();
	}


	/// FIRESTORE


	async function getTodos(userId) {
		const user = Auth.currentUser;

		
	}

	complete

	
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
	<h2>Logged in as <span class="text-has-info">{user.email}</span></h2>
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

