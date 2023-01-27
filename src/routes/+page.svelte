<script lang="ts">
	import axios from 'axios';

	let search: string = '',
		searchTriggered: boolean = false,
		imageUrls: Array<{ b64_json: string }> = [],
		loading: boolean = false;

	let loaded = !loading && imageUrls.length > 0;

	async function generateImages(e: Event) {
		e.preventDefault();
		loading = true;
		searchTriggered = true;

		//call api and get images
		try {
			const response = await axios.get(`https://dolle.onrender.com/generate/?prompt=${search}`);
			// const response = await axios.get(`http://localhost:3000/generate?prompt=${search}`);

			loading = false;
			if (response.status === 200) {
				imageUrls = response.data.message;
			} else {
				alert('Something went wrong');
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<main class="p-20 h-screen z-0">
	<section
		id="homepage_prompt"
		class={`h-full w-full relative top-20 ${
			loaded ? '-translate-y-1/4' : ''
		} transition-all duration-500`}
	>
		<div class="w-full flex flex-col">
			<label for="image_search_text" class="text-slate-700">
				Start with a detailed description
			</label>
			<div id="input_group" class={`w-full h-8 flex border-slate-100 drop-shadow-md mt-2 `}>
				<form on:submit={(e) => generateImages(e)} class="flex w-full">
					<input
						type="text"
						id="image_search_text"
						class="w-3/4 outline-none p-6 focus:drop-shadow-md peer duration-300 rounded-l-md"
						placeholder="A cat riding a bike"
						bind:value={search}
					/>
					<button
						type="submit"
						disabled={loading}
						class={`${
							search.length > 0 ? 'bg-black text-white' : 'bg-slate-100'
						} text-center p-6 flex items-center peer-focus:drop-shadow-md duration-300 rounded-r-md`}
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
						{/if}
						Generate</button
					>
				</form>
			</div>
		</div>

		{#if !loading && imageUrls.length > 0}
			<div
				id="generated_images"
				class="flex xs:flex-col gap-4 mt-14 transition-opacity delay-700 duration-1000"
			>
				<h1 class="text-md text-slate-700">Here&apos;s an image of {search}</h1>
				<div class="mt-2 flex xs:flex-col sm:flex-row gap-4 flex-wrap overflow-scroll">
					{#each imageUrls as imageUrl}
						<img
							src={`data:image/png;base64, ${imageUrl.b64_json}`}
							alt={search}
							class="w-64 h-64 hover:scale-95 hover:cursor-pointer duration-200"
						/>
					{/each}
				</div>
			</div>
		{/if}
	</section>
</main>

<style>
</style>
