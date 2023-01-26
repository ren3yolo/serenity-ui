<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';

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
		class="absolute border-b-2 border-slate-200 top-0 h-20 px-10 w-screen bg-white flex justify-between items-center"
	>
		<div id="brand" class={`font-semibold ${mobileView ? 'order-2' : 'order-1'}`}>DALL-E</div>
		{#if mobileView}
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					class="hover:cursor-pointer transition-all duration-1000"
					on:click={() => toggleMenuOnSmallDisplay()}
				>
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
					class={`z-1 text-xl pt-10 w-screen h-screen flex flex-col absolute top-20 transition-all duration-600 ${
						menuOpen ? 'left-0' : '-left-full'
					}`}
				>
					<a class="hover:bg-slate-100 hover:text-black p-4" href="/history">History</a>
					<a class="hover:bg-slate-100 hover:text-black p-4" href="/account">My Account</a>
					<a class="hover:bg-slate-100 hover:text-black p-4" href="/about">About</a>
				</div>
			</div>
		{:else}
			<div id="nav-links" class={`${mobileView ? 'order-1' : 'order-2'} flex gap-4`}>
				<a href="/history">History</a>
				<a href="/account">My Account</a>
				<a href="/about">About</a>
			</div>
		{/if}

		<div class="order-3" />
	</nav>
	<slot />
</div>
