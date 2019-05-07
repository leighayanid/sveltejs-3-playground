<script>
    import { fade, fly } from 'svelte/transition';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    
    function remove() {
		dispatch('remove', { id });
	}

	function toggleStatus() {
        let newStatus = !complete;
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    
    export let id;
    export let text;
    export let complete;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }

    li {
        display: flex;
        align-items: center;
        font-size: 1.2em;
        font-weight: bold;
        border-bottom: 1px solid black;
        padding-bottom: .5em;
    }

    span{
        flex-wrap: wrap;
        margin-right: auto;
    }

    button{
        margin: 0 .25rem;
        border: none;
        background: none;
        margin-right: 5rem;
    }

    .fa-times{
        color: red;
        font-size: 1.25em;
    }

    .fa-check{
        color: green;
        font-size: 1.25em;
    }
</style>

<div>
    <li in:fly="{{ y: 100, duration: 100 }}" out:fade="{{ duration: 100 }}">
    {#if complete}
        <span class="is-complete">
            { text }
        </span>
        <button class="is-button" on:click={toggleStatus}>
            <i class="fas fa-check"></i>
        </button>
    {:else}
        <span>
            { text }
        </span>
        <button class="is-button" on:click={toggleStatus}>
            <i class="fas fa-times"></i>
        </button>
    {/if}

    <button class="is-button" on:click={remove}>
        <i class="fas fa-trash"></i>
    </button>
    </li>
</div>
