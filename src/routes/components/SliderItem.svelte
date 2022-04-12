<script lang="ts">
	export let index: number;
	export let from: number;
	export let to: number;
	export let width: number;

    const colors = ["red", "green", "blue"];
</script>

{#if index >= from && index <= to}
	<li class="slider__item"
        style:background-color={colors[index]}
		style:width="{width}%">
		<slot></slot>	
	</li>
{/if}
 
<style>
	.slider__item {
        flex-shrink: 0;
	}
</style>
