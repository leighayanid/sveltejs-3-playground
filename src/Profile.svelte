<script>
    export let displayName;
    export let photoURL;
    export let uid;
    import { auth } from './firebase';
</script>

<style>
.profile {
    position: fixed;
    top: 0;
    left: 0;
    background: #33658A;
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img{
    border-radius: 50%;
}

button {
    background: white;
    color: black;
    padding: .5em 3em;
    border-radius: 2em;
}

.name{
    color: white;
}
</style>

<div class="profile">
    <img src={ photoURL } width="100" alt="user avatar">
    <h3 class="name">{ displayName }!</h3>
	<button on:click={ () => auth.signOut() } class="button">Logout</button>
</div>
