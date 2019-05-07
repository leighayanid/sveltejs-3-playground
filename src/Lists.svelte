<script>
	import ListItem from './ListItem.svelte';
	import { db } from './firebase';
	import { collectionData } from 'rxfire/firestore';
	import { startWith } from 'rxjs/operators';

	export let uid;

	let text = 'some task';

	const query = db.collection('lists').where('uid', '==', uid).orderBy('created');

	const lists = collectionData(query, 'id').pipe(startWith([]));

	function add() {
		db.collection('lists').add({ uid, text, complete: false, created: Date.now() });
		text = '';
	}

	function updateStatus(event) {
		console.log(event);
		const { id, newStatus } = event.detail;
		db.collection('lists').doc(id).update({ complete: newStatus });
	}

	function removeItem(event) {
		const { id } = event.detail;
		db.collection('lists').doc(id).delete();
	}
</script>

<style>
input { 
width: 80vw;
padding: 1em;
}

button {
	width: 10vw;
	margin-left: 1em;
	background: #FFD131;
	border: none;
	color: white;
	border-radius: 2em;
	padding: 0;
}

.todos {
position: absolute;
top: 0;
left: 0;
margin-left: 20%;
width: 80vw;
}

.todo-input {
display: flex;
margin: 1em;
}
</style>

<div class="todos">
	<div class="todo-input">
		<input bind:value={text}>
		<button class="button is-info" on:click={add}>Add Item</button>
	</div>
	<hr>
	<ul>
		{#each $lists as list}
			<ListItem {...list} on:remove={removeItem} on:toggle={updateStatus} />
		{/each}
	</ul>
</div>

