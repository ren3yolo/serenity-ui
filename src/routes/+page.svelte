<script lang="ts">
	import axios from 'axios';
	import { onMount, tick } from 'svelte';
	import Image from '../components/Image.svelte';

	let search: string = '',
		searchTriggeredOnce: boolean = false,
		imageUrls: Array<{ b64_json: string }> = [],
		loading: boolean = false;

	function createObservers() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			});
		});

		const images = document.querySelectorAll('.search_result');
		images.forEach((image) => observer.observe(image));
	}

	async function generateImages(e: Event) {
		e.preventDefault();
		loading = true;

		//call api and get images
		try {
			const response = await axios.get(`https://dolle.onrender.com/generate/?prompt=${search}`);
			// const response = await axios.get(`http://localhost:3000/generate?prompt=${search}`);

			loading = false;
			if (response.status === 200) {
				searchTriggeredOnce = true;
				imageUrls = response.data.message;
				await tick();
				createObservers();
			} else {
				alert('Something went wrong');
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<main class="pt-20 px-20 z-0">
	<section
		id="homepage_prompt"
		class={`h-full w-full relative top-1/3 ${
			searchTriggeredOnce ? '-translate-y-1/4' : ''
		} transition-all duration-500`}
	>
		<div class="w-full flex flex-col">
			<label for="image_search_text" class="text-slate-700">
				{#if searchTriggeredOnce}
					Edit the description with some detail
				{:else}
					Start with a detailed description
				{/if}
			</label>
			<div id="input_group" class={`w-full h-8 flex border-slate-100 drop-shadow-md mt-2 `}>
				<form
					on:submit={(e) => generateImages(e)}
					class="flex xs:flex-col xs:gap-2 sm:flex-row sm:gap-0 w-full"
				>
					<input
						type="text"
						id="image_search_text"
						class="sm:w-3/4 outline-none p-6 focus:drop-shadow-md peer duration-300 rounded-l-md"
						placeholder="A cat riding a bike"
						bind:value={search}
					/>
					<button
						type="submit"
						disabled={loading}
						class={`${
							search.length > 0 ? 'bg-black text-white' : 'bg-slate-100'
						} xs:w-full sm:w-32 flex justify-center p-6 items-center peer-focus:drop-shadow-md duration-300 rounded-r-md`}
					>
						{#if loading}
							<span>
								<svg
									class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									/>
									<path
										class="opacity-75"
										fill="white"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
							</span>
						{:else}
							Generate
						{/if}
					</button>
				</form>
			</div>
		</div>

		{#if !loading && imageUrls.length > 0}
			<div id="generated_images" class="flex xs:flex-col xs:mt-32 gap-4 sm:mt-14">
				<h1 class="text-md text-slate-700">Here&apos;s an image of {search}</h1>
				<div
					class="mt-2 flex xs:flex-col xs:items-center sm:flex-row gap-4 flex-wrap overflow-scroll mb-40"
				>
					{#each imageUrls as imageUrl}
						<div class="search_result">
							<Image payload={imageUrl.b64_json} altText={search} />
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</section>
</main>

<style>
	main {
		height: calc(100vh - 10rem);
	}

	.search_result {
		opacity: 0;
		transform: translateX(-100%);
		transition: all 1s;
	}

	.search_result:nth-child(2) {
		transition-delay: 200ms;
	}

	.search_result:nth-child(3) {
		transition-delay: 400ms;
	}

	.search_result:nth-child(4) {
		transition-delay: 600ms;
	}

	.show {
		opacity: 1;
		transform: translateX(0);
	}
</style>
