<script lang="ts">
	import ProductImages from './ProductImages.svelte';
	import QuantityInput from './components/QuantityInput.svelte';
	import { products } from '../../src/stores/products';
	import { cart } from '../../src/stores/cart.store';

	let product = products[0];
	let quantity = 0;
	let innerWidth: number;
	let openOverlay = false;

	function addProduct() {
		if (quantity > 0) {
			cart.addItem(product, quantity);
			quantity = 0;
		}
	}

	function onResize(e) {
		if (e.target.innerWidth < 768) {
			openOverlay = false;
		}
	}
</script>

<svelte:head>
	<title>Shopping Cart</title>
</svelte:head>

<svelte:window bind:innerWidth on:resize={openOverlay ? onResize : undefined} />

<main class="main">
	<ProductImages
		images={product.images}
		thumbnails={product.thumbnails}
		overlay={true}
		bind:open={openOverlay}
		showControls={true}
	/>

	<section class="section product">
		<ProductImages
			images={product.images}
			thumbnails={product.thumbnails}
			overlay={false}
			showControls={innerWidth < 768}
			on:click={() => (openOverlay = true)}
		/>
		<div class="information">
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
			<div class="purchase">
				<QuantityInput bind:value={quantity} />
				<button class="purchase__button" on:click={addProduct}>
					<img src="images/icon-cart.svg" alt="cart" class="purchase__button-icon" />
					<span class="purchase__button-text"> Add to cart </span>
				</button>
			</div>
		</div>
	</section>
</main>

<style>
	.information {
		margin: var(--mb-2-5);
		display: flex;
		justify-content: center;
		flex-direction: column;
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
		flex-wrap: wrap;
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

	.purchase {
		margin-top: var(--mb-1-5);
		display: flex;
		flex-direction: column;
		gap: 10px;
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

	.purchase__button:hover {
		opacity: 0.6;
	}

	.purchase__button-icon {
		filter: brightness(0) saturate(100%) invert(95%) sepia(97%) saturate(14%) hue-rotate(213deg)
			brightness(104%) contrast(104%);
		margin-right: 1.3em;
		width: 1.4em;
	}

	.purchase__button-text {
		font-weight: var(--font-semi-bold);
		font-size: var(--normal-font-size);
	}

	@media screen and (min-width: 768px) {
		.information {
			margin: 5rem;
			margin-right: 0;
		}

		.information__price-old {
			width: 100%;
		}

		.information__price-old {
			margin-top: var(--mb-0-25);
		}
	}

	@media screen and (min-width: 900px) {
		.purchase {
			flex-direction: row;
		}
	}
</style>
