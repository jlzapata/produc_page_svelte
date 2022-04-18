<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Navigation } from 'swiper';
	import CloseButton from './components/CloseButton.svelte';

	export let images: string[];
	export let thumbnails: string[];
	export let open = false;
	export let overlay = false;
	export let showControls = false;

	let innerWidth: number;
	let currentIndex = 0;
	let swiper;

	function onRealIndexChange(e) {
		currentIndex = e.detail[0][0].realIndex;
	}
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 768 || open || !overlay}
	<div class="product-images" class:overlay>
		<div class="slider-container">
			<Swiper
				slidesPerView={1}
				class="item__swiper"
				loop={true}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}}
				modules={[Navigation]}
				on:realIndexChange={onRealIndexChange}
				on:swiper={(e) => (swiper = e.detail[0])}
			>
				{#each images as image}
					<SwiperSlide>
						<img on:click src={image} class="item__image" alt="product" />
					</SwiperSlide>
				{/each}
			</Swiper>

			<div class="swiper__control" class:showControls={!showControls}>
				<button class="swiper__button swiper-button-prev">
					<img src="images/icon-previous.svg" alt="arrow left" />
				</button>
				<button class="swiper__button swiper-button-next">
					<img src="images/icon-next.svg" alt="arrow right" />
				</button>
			</div>

			{#if showControls}
				<CloseButton class="product__images-close" on:click={() => (open = false)} />
			{/if}
		</div>
		{#if innerWidth > 768}
			<div class="swiper__thumbnails">
				{#each thumbnails as thumbnail, i}
					<div
						class="swiper__thumbnail"
						class:active={currentIndex == i}
						on:click={(e) => swiper.slideTo(i + 1)}
					>
						<img class="swiper__thumbnail-img" src={thumbnail} alt="product" />
					</div>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style>
	.product-images {
		padding-left: 0;
		padding-right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.overlay {
		background-color: rgba(0, 0, 0, 0.7);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: calc(var(--z-fixed));
		display: none;
	}
	.item__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.swiper__control {
		padding: 0 1em;
		z-index: var(--z-tooltip);
	}

	.swiper__control.showControls {
		display: none;
	}
	.swiper__button {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: none;
	}

	.swiper__button img {
		width: 12px;
		height: 12px;
	}

	@media screen and (min-width: 768px) {
		.overlay {
			display: flex;
		}
		.product-images {
			flex-direction: column;
			row-gap: 3em;
		}
		.slider-container {
			max-width: 400px;
			height: auto;
			display: flex;
			flex-direction: row;
		}

		.item__image {
			border-radius: 4%;
			cursor: pointer;
		}

		.swiper__control {
			padding: 0;
		}

		.swiper-button-prev {
			transform: translateX(-50%);
		}

		.swiper-button-next {
			transform: translateX(50%);
		}
	}

	.swiper__thumbnails {
		display: flex;
		gap: 10px;
	}

	.swiper__thumbnail {
		width: 80px;
		height: 80px;
		position: relative;
		border-radius: 8%;
	}

	.swiper__thumbnail.active {
		border: 2px solid var(--primary-color);
	}

	.swiper__thumbnail-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8%;
	}

	.swiper__thumbnail:hover {
		cursor: pointer;
	}

	.swiper__thumbnail::after {
		content: '';
		position: absolute;
		left: 0;
		transition: 0.3s;
		background-color: rgba(255, 255, 255, 0.4);
		border-radius: 4%;
	}

	.swiper__thumbnail.active::after {
		background-color: rgba(255, 255, 255, 0.6);
		width: 100%;
		height: 100%;
	}

	.swiper__thumbnail:hover::after {
		width: 100%;
		height: 100%;
	}
</style>
