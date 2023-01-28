<script lang="ts">
	import type { Post } from './types';
	export let data: { posts: Array<Post> };
</script>

<section id="posts" class="w-full flex flex-col items-center p-20 pt-32">
	<h1 class="text-3xl text-slate-600 font-light">Shared by the community</h1>

	<div class="mt-10 flex flex-wrap gap-8">
		{#each data.posts as post}
			<div
				id="uploaded_image"
				class="relative hover:scale-95 hover:cursor-pointer duration-200 group"
			>
				<img
					src={`data:image/png;base64, ${post.b64_json}`}
					alt={post.prompt}
					class="w-64 h-64 relative"
				/>

				<div
					id="overlay"
					class="absolute bottom-0 h-20 opacity-0 group-hover:opacity-100 w-full bg-black text-white flex flex-wrap justify-center items-center font-light backdrop-blur-md bg-opacity-60 text-md"
				>
					{post.prompt.toUpperCase()}
				</div>
			</div>
		{/each}
	</div>
</section>
