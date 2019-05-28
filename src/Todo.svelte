<script>
  import { onMount } from "svelte";
  export let id;
  export let name;
  export let description;
  export let complete;

  import gql from "graphql-tag";

  import client from "./client";
  import { updateTodo } from "./graphql/mutations";
  import { onUpdateTodo } from "./graphql/subscriptions";

  async function handler() {
    const result = await client.mutate({
      mutation: gql(updateTodo),
      variables: {
        input: {
          id,
          name,
          description,
          complete: !complete
        }
      }
    });
  }

  let subscription;

  onMount(async () => {
    subscription = client.subscribe({ query: gql(onUpdateTodo) }).subscribe({
      next: data => {
        const todo = data.data.onUpdateTodo;
        complete = todo.complete;
      }
    });
  });
</script>

<style>
  .complete {
    text-decoration: line-through;
    color: crimson;
  }
</style>

<h3 class:complete>{name}</h3>
<p>{description}</p>

<button on:click={handler} class="button">
  Mark {complete ? 'Incomplete' : 'Complete'}
</button>
