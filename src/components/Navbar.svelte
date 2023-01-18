<script lang="ts">
	import Avatar from './Avatar.svelte';
</script>

<nav class="fixed top-0 w-screen bg-white text-blac flex items-center justify-between px-10">
	<header class="font-bold text-2xl">Serenity</header>
	<ul class="flex gap-4">
		<li>
			<a href="/">Home</a>
		</li>
		<li><a href="/journals">My Journals</a></li>
		<li>
			<a href="/self-care">Self Care</a>
		</li>
		<li><a href="/tips">Tips</a></li>
	</ul>

	<Avatar />
</nav>

<style>
	nav {
		height: 15vh;
	}
</style>
