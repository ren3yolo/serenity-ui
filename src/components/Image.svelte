<script lang="ts">
	import axios from 'axios';

	export let payload: string = '';
	export let altText: string = '';

	async function upload() {
		const response = await axios({
			method: 'post',
			// baseURL: 'http://localhost:3000',
			baseURL: 'https://dolle.onrender.com',
			url: '/post',
			data: {
				b64_json: payload,
				prompt: altText
			}
		});

		if (response.status === 200) {
			alert('Image uploaded successfully !');
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="image_block"
	class="relative flex flex-col gap-2 group hover:scale-95 duration-300"
	on:click={upload}
>
	<img
		src={`data:image/png;base64, ${payload}`}
		alt={altText}
		class="w-64 h-64 hover:cursor-pointer duration-200 relative"
	/>

	<button
		class="relative h-14 w-64 bg-black text-white flex justify-center items-center border-2 border-black group-hover:bg-white group-hover:text-black font-light"
	>
		SHARE
	</button>
</div>
