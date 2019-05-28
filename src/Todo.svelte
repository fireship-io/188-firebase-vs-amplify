<script>
    export let id;
    export let name;
    export let description;
    export let complete;

    import { Firestore } from './firebase';

    function handler() {
        const ref = Firestore.doc(`todos/${id}`); 
        ref.update({ complete: !complete });
    } 
    
</script>

<style>
    .complete { text-decoration: line-through; color: crimson; }
</style>


<h3 class:complete>{name}</h3>
<p>{description}</p>

<button on:click={handler} class="button">Mark { complete ? 'Incomplete' : 'Complete' }</button>