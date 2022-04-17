<script lang="ts">
	import ProductImages from './ProductImages.svelte';
	import QuantityInput from './components/QuantityInput.svelte';
	import { products } from '../../src/stores/products';
	import { cart } from '../../src/stores/cart.store';

	let product = products[0];
	let quantity = 0;
	let productCart;
	const cartSubscription = cart.subscribe((value) => (productCart = value));

	function addProduct() {
		if (quantity > 0) {
			cart.addItem(product, quantity);
			quantity = 0;
		}
	}
</script>

<svelte:head>
	<title>Shopping Cart</title>
</svelte:head>

<section class="section product-images">
	<ProductImages images={product.images} />
</section>
<section class="section information">
	<h2 class="information__company-name">SNEAKER COMPANY</h2>
	<h1 class="information__product-name">
		{product.name}
	</h1>
	<p class="information__product-description">
		{product.description}
	</p>
	<div class="information__price-container">
		<span class="information__price-value">
			${(product.price * (product.discount / 100)).toFixed(2)}
		</span>
		<span class="information__price-discount">
			{product.discount}%
		</span>
		<del class="information__price-old">
			${product.price.toFixed(2)}
		</del>
	</div>
</section>
<section class="section purchase">
	<QuantityInput bind:value={quantity} />
	<button class="purchase__button" on:click={addProduct}>
		<img src="images/icon-cart.svg" alt="cart" class="purchase__button-icon" />
		<span class="purchase__button-text"> Add to cart </span>
	</button>
</section>

<style>
	.product-images {
		padding-left: 0;
		padding-right: 0;
	}

	.information__company-name {
		font-size: 0.9em;
		font-weight: var(--font-semi-bold);
		color: var(--primary-color);
		letter-spacing: 1.5px;
		margin-bottom: var(--mb-0-75);
	}

	.information__product-name {
		font-size: var(--biggest-font-size);
		font-weight: var(--font-semi-bold);
		margin-bottom: var(--mb-1);
		max-width: 300px;
	}

	.information__product-description {
		font-size: var(--normal-font-size);
		font-weight: var(--font-regular);
		line-height: 1.5;
		margin-bottom: var(--mb-1-5);
		color: var(--Dark-grayish-blue);
	}

	.information__price-container {
		display: flex;
	}

	.information__price-value {
		font-size: var(--big-font-size);
		font-weight: var(--font-semi-bold);
		margin-right: var(--mb-1);
	}

	.information__price-discount {
		background-color: var(--secondary-color);
		color: var(--primary-color);
		padding: 0.2em 0.8em;
		font-weight: var(--font-semi-bold);
		border-radius: 0.25em;
		font-size: var(--h3-font-size);
		display: flex;
		align-items: center;
	}

	.information__price-old {
		margin-left: auto;
		font-weight: var(--font-semi-bold);
		font-size: var(--h3-font-size);
		display: flex;
		align-items: center;
		color: var(--Grayish-blue);
	}

	.purchase__button {
		width: 100%;
		padding: 1.5em;
		border: none;
		background-color: var(--primary-color);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
	}

	.purchase__button-icon {
		color: red;
		margin-right: 1.3em;
		width: 1.4em;
	}

	.purchase__button-text {
		font-weight: var(--font-semi-bold);
		font-size: var(--normal-font-size);
	}
</style>
