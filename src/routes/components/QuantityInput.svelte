<script lang="ts">
	import { onMount } from 'svelte';
	export let value = 0;

	function increment() {
		value++;
	}

	function decrement() {
		if (value > 0) {
			value--;
		}
	}

	onMount(() => {
		if (value < 0) {
			value = 0;
		}
	});
</script>

<div class="quantity">
	<button class="quantity__minus" on:click={decrement}
		><img src="images/icon-minus.svg" alt="decrese" /></button
	>
	<input type="number" class="quantity__input" bind:value on:change min="0" max="10" />
	<button class="quantity__plus" on:click={increment}
		><img src="images/icon-plus.svg" alt="increment" /></button
	>
</div>

<style>
	button,
	input {
		border: none;
		background-color: transparent;
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.quantity {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--Light-grayish-blue);
		border-radius: 10px;
		position: relative;
		padding: 1em;
		margin-bottom: var(--mb-1);
	}

	.quantity__input,
	.quantity__minus,
	.quantity__plus {
		font-weight: var(--font-semi-bold);
		font-size: var(--h1-font-size);
		display: flex;
		align-items: center;
	}

	.quantity__minus,
	.quantity__plus {
		color: var(--primary-color);
		padding: 0 0.5em;
	}

	.quantity__input {
		text-align: center;
	}
</style>
