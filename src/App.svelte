<script>
  import { onMount } from "svelte";
  import Info from "./User.svelte";
  import Todo from "./Todo.svelte";

  export let name;

  let todos = [
    { id: "0", name: "todo1", description: "do this first", complete: false },
    { id: "1", name: "todo2", description: "do this second", complete: false }
  ];

  import Auth from "@aws-amplify/auth";

  import gql from "graphql-tag";
  import client from './client';

  import { listTodos } from "./graphql/queries";

  let user;

  onMount(async () => {
    user = await Auth.currentUserInfo();
    console.log(user);

    client
      .query({
        query: gql(listTodos)
      })
      .then(({ data: { listTodos } }) => {
        todos = listTodos.items;
      });
  });

  async function login() {
    const credentials = await Auth.signIn({
      username: "jeffd23",
      password: "amplify23"
    });

    console.log(credentials);

    user = credentials;
  }

  function logout() {
    Auth.signOut();
  }
</script>

<style>
  main {
    padding: 5%;
    text-align: center;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
</svelte:head>

<main class="content">
  {#if user}
    <h2>
      Logged in as
      <span class="has-text-info">{user.username}</span>
    </h2>
    <button on:click={logout} class="button">Log out</button>

    <hr />

    <h2>My Todos</h2>

    {#each todos as todo}
      <Todo {...todo} />
      <hr />
    {/each}
  {:else}
    <button on:click={login} class="button is-success">Log in please</button>
  {/if}

</main>
