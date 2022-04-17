<script lang="ts">
	import { cartTotal } from '../../stores/cart.store';
</script>

<button class="cart__notification" on:click>
	<img src="images/icon-cart.svg" alt="shopping cart" />
	{#if $cartTotal > 0}
		<span class="cart__notification-count">{$cartTotal > 99 ? '+99' : $cartTotal}</span>
	{/if}
</button>

<style>
	.cart__notification {
		position: relative;
		border: none;
		background: none;
	}

	.cart__notification-count {
		position: absolute;
		top: -5px;
		right: -10px;
		background: var(--primary-color);
		color: #fff;
		border-radius: 8px;
		padding: 1px 5px;
		line-height: 12px;
		font-size: 10px;
		min-width: 20px;
	}
</style>
