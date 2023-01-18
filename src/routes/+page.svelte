<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const tl = gsap.timeline();
		tl.fromTo('section header', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 })
			.fromTo(
				'img',
				{ y: 500, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1
				}
			)
			.from('#section1_desc', {
				opacity: 0,
				duration: 1
			});
	});
</script>

<Navbar />

<main class="h-screen w-screen">
	<!-- First section  -->
	<section id="intro" class="flex flex-col min-h-full justify-between bg-orange-50">
		<header class="text-center">Healing minds, one day at a time</header>

		<div class="flex w-full h-full justify-between">
			<div class="w-1/3 h-1/3 max-w-6xl">
				<img
					id="irritated"
					src="images/irritated.webp"
					alt="Irritated person"
					class="rounded-full"
				/>
			</div>

			<div id="section1_desc" class="flex flex-col justify-center gap-10">
				<p class="max-w-xl">Having trouble dealing with the stress and anxiety in your life?</p>
			</div>
		</div>
	</section>
</main>

<style>
	#intro {
		padding: 17vh;
	}

	section > header {
		font-family: 'Livvic';
		font-size: 4rem;
		opacity: 0;
	}

	#irritated {
		opacity: 0;
	}

	#section1_desc {
		font-family: 'Livvic';
		font-size: 2rem;
	}
</style>
