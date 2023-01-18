<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline();

		tl.from('section header', {
			scrollTrigger: 'section header',
			opacity: 0,
			duration: 2
		})
			.from('img', {
				y: 500,
				duration: 1
			})
			.from('#section1_desc', {
				opacity: 0,
				duration: 1
			});
	});
</script>

<Navbar />

<main class="h-screen w-screen">
	<!-- First section  -->
	<section class="flex flex-col min-h-full justify-between bg-orange-50">
		<header class="text-center">Healing minds, one day at a time</header>

		<div class="flex w-full h-full justify-between">
			<div class="w-1/3 h-1/3 max-w-6xl">
				<img src="images/irritated.webp" alt="Irritated person" />
			</div>

			<div id="section1_desc" class="flex flex-col justify-center gap-10">
				<p class="max-w-xl">Having trouble dealing with the stress and anxiety in your life?</p>
			</div>
		</div>
	</section>
</main>

<style>
	section {
		padding: 17vh;
	}

	section > header {
		font-family: 'Livvic';
		font-size: 4rem;
	}

	#section1_desc {
		font-family: 'Livvic';
		font-size: 2rem;
	}
</style>
