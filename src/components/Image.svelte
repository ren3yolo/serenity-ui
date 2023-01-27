<script lang="ts">
	export let payload: string = '';
	export let altText: string = '';
</script>

<div id="image_block" class="relative flex flex-col gap-2 group">
	<img
		src={`data:image/png;base64, ${payload}`}
		alt={altText}
		class="w-64 h-64 hover:cursor-pointer duration-200 relative peer"
	/>

	<button
		class="absolute h-16 w-64 z-10 bottom-0 bg-black text-white opacity-0 flex justify-center items-center group-hover:opacity-100 duration-300 backdrop-blur-lg bg-opacity-50"
	>
		SHARE
	</button>
</div>
