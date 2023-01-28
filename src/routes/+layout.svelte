<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	let mobileView: boolean,
		menuOpen = false;

	onMount(() => {
		mobileView = document.getElementById('container')?.clientWidth! <= 600;
		window.addEventListener('resize', () => {
			let width: number = document.getElementById('container')?.clientWidth!;
			if (width <= 600) {
				mobileView = true;
			} else {
				mobileView = false;
			}
		});
	});

	function toggleMenuOnSmallDisplay() {
		menuOpen = !menuOpen;
	}
</script>

<title> DALL-E </title>

<div id="container" class="h-screen w-screen relative">
	<nav
		class="z-10 fixed border-b-2 border-slate-200 top-0 h-20 px-10 w-screen bg-white flex justify-between items-center"
	>
		<div id="brand" class={`font-semibold ${mobileView ? 'order-2' : 'order-1'}`}>
			<a class="p-4" href="/">PEEKS.AI</a>
		</div>
		{#if mobileView}
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span class="hover:cursor-pointer" on:click={() => toggleMenuOnSmallDisplay()}>
					{#if menuOpen}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					{/if}
				</span>
				<div
					id="nav-menu-overlay"
					class={`z-20 bg-black text-white text-xl pt-10 w-screen h-screen flex flex-col fixed top-20 transition-all duration-700 ${
						menuOpen ? 'left-0' : '-left-full'
					}`}
				>
					<a class="hover:bg-slate-100 hover:text-black p-4" href="/feed">MY FEED</a>
				</div>
			</div>
		{:else}
			<div id="nav-links" class={`${mobileView ? 'order-1' : 'order-2'} flex gap-4`}>
				<a href="/feed">FEED</a>
			</div>
		{/if}

		<div class="order-3" />
	</nav>
	{#if $navigating}
		<div class="p-40 h-full bg-black text-white flex flex-col gap-8 justify-center items-center">
			<span class="h-20 w-20 rounded-full animate-spin border-t-2" />
			<span class="text-xl">Getting a few things ready for you</span>
		</div>
	{:else}
		<slot />
	{/if}

	<footer
		class="sm:fixed bottom-0 h-20 bg-black text-white border-t-2 flex justify-center items-center w-full"
	>
		PEEKS.AI Copyright© 2023 All Rights Reserved
	</footer>
</div>
