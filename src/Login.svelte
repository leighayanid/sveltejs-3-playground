<script>
	import Profile from './Profile.svelte';
	import Lists from './Lists.svelte';

	import { auth, googleProvider, facebookProvider, githubProvider, twitterProvider } from './firebase';
	import { authState } from 'rxfire/auth';

	let user;

	const unsubscribe = authState(auth).subscribe(u => user = u);

	function loginWithGoogle() {
		auth.signInWithPopup(googleProvider);
	}

	function loginWithFacebook() {
		auth.signInWithPopup(facebookProvider);
	}
	
	function loginWithGithub() {
		auth.signInWithPopup(githubProvider);
	}

	function loginWithTwitter() {
		auth.signInWithPopup(twitterProvider);
	}
</script>


<style>
	section {
		background: rgb(235, 235, 235);
		padding: 20px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.btn {
		margin-bottom: 1rem;
		font-size: 1.25rem;
	}

	.social-btn {
		width: 30vw;
		display: flex;
		flex-direction: column;
	}

	.btn:hover{
		transition: all .4s ease;
		background: black;
		color: white;
	}

	h1 {
		font-size: 3em;
	}

	i {
		margin-right: 5em;
	}
</style>

<section>
{#if user}
	<Profile {...user} />
	<hr>
	<Lists uid={user.uid} />
{:else}
	<h1>Svelte Shopping List App</h1>
	<div class="social-btn">
		<button on:click={loginWithGoogle} class="btn">
			<i class="fab fa-google"></i>
			Sign in with Google
		</button>
		<button on:click={loginWithFacebook} class="btn">
			<i class="fab fa-facebook-f"></i>
			Sign in with Facebook
		</button>
		<button on:click={loginWithTwitter} class="btn">
			<i class="fab fa-twitter"></i>
			Sign in with Twitter
		</button>
		<button on:click={loginWithGithub} class="btn">
			<i class="fab fa-github"></i>
			Sign in with Github
		</button>
	</div>
	
{/if}
</section>