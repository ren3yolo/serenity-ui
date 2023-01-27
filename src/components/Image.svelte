<script lang="ts">
	export let payload: string = '';
	export let altText: string = '';
</script>

<div id="image_block" class="relative flex flex-col gap-2 group hover:scale-95 duration-300">
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
