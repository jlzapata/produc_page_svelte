<script lang="ts">
	import type { Product } from 'src/models/product.type';

	import { onDestroy } from 'svelte';

	import { cart, cartItems } from '../../stores/cart.store';

	let productCart: [product: Product, quantity: number][];
	const unsubscribeCart = cartItems.subscribe((value) => (productCart = value));
	onDestroy(() => unsubscribeCart());
</script>

<div class="cart">
	<div class="cart__header">
		<h3 class="cart__header-title">Cart</h3>
	</div>
	{#if productCart.length > 0}
		<div class="cart__content">
			{#each productCart as [product, quantity]}
				<div class="cart__product">
					<div class="cart__product-image">
						<img src={product.images[0]} alt="product" class="cart__product-image-source" />
					</div>
					<div class="cart__product-information">
						<h4 class="cart__product-name">
							{product.name}
						</h4>
						<div class="cart__product-price-container">
							<span class="cart__product-price-value">
								${(product.price * (product.discount / 100)).toFixed(2)} x {quantity}
							</span>
							<span class="cart__product-price-total">
								${(product.price * (product.discount / 100) * quantity).toFixed(2)}
							</span>
						</div>
					</div>
					<button
						class="cart__product-delete"
						alt="delete item"
						on:click={() => cart.removeItem(product.id)}
					>
						<img src="images/icon-delete.svg" alt="" />
					</button>
				</div>
			{/each}
			<button class="cart__checkout"> Checkout </button>
		</div>
	{:else}
		<div class="cart__empty">
			<p class="cart__empty-text">Your cart is empty.</p>
		</div>
	{/if}
</div>

<style>
	.cart {
		background-color: white;

		border-radius: 10px;
		height: 280px;
		display: flex;
		flex-direction: column;
		box-shadow: 5px 5px 12px 2px rgba(0, 0, 0, 0.2);
	}

	.cart__header {
		border-bottom: 2px solid var(--Light-grayish-blue);
		padding: 25px;
	}

	.cart__empty {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-weight: var(--font-semi-bold);
		color: var(--Dark-grayish-blue);
	}

	.cart__content {
		padding: 1.5em;
	}

	.cart__product {
		display: flex;
		align-items: center;
		margin-bottom: var(--mb-2);
	}

	.cart__product-image {
		width: 60px;
		height: 60px;
		border-radius: 15px;
		margin-right: 15px;
	}

	.cart__product-image-source {
		border-radius: 5px;
	}

	.cart__product-information {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.cart__product-name {
		color: var(--Dark-grayish-blue);
		font-weight: 100;
		margin-bottom: var(--mb-0-25);
	}
	.cart__product-price-container {
		color: var(--Dark-grayish-blue);
	}

	.cart__product-price-total {
		color: black;
		font-weight: var(--font-semi-bold);
		margin-left: var(--mb-0-25);
	}

	.cart__product-delete {
		margin-left: auto;
		border: none;
		background-color: transparent;
		padding: 5px;
		padding-right: 0;
	}

	.cart__checkout {
		background-color: var(--primary-color);
		width: 100%;
		color: var(--Light-grayish-blue);
		border: none;
		border-radius: 5px;
		padding: 20px;
		font-weight: var(--font-semi-bold);
		font-size: 1em;
	}
</style>
