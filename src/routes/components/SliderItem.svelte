<script lang="ts">
	export let context: SliderItemContext;
	export let index: number;
	interface SliderItemContext {
		from: number;
		to: number;
		width: number;
	}

	const colors = ['red', 'green', 'blue'];
</script>

{#if index >= context.from && index <= context.to}
	<li class="slider__item" style:background-color={colors[index]} style:width="{context.width}%">
		<slot />
	</li>
{/if}

<style>
	.slider__item {
		flex-shrink: 0;
	}
</style>
