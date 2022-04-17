<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte';
	import type SliderItem from './SliderItem.svelte';

	export let visibleItems = 1;
	// export let itemCount:number;
	let startIndex = 0;
	let transitioning = false;
	let sliderItems: SliderItem[] = [];

	function next() {
		transitioning = true;
	}

	function transitionend() {
		startIndex += visibleItems;
		transitioning = false;
	}
</script>

<ul
	class="slider__item-container"
	class:transitioning
	style="right:{transitioning ? 100 : 0}%"
	on:click={next}
	on:transitionend={transitionend}
>
	<!-- {#each items as item}
        
    {/each} -->
	<slot
		name="items"
		context={{
			width: 100 / visibleItems,
			from: startIndex,
			to: startIndex + visibleItems
		}}
	/>
</ul>

<style>
	.slider__item-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		will-change: right;
	}

	.transitioning {
		transition: right 0.4s ease-in-out;
	}
</style>
