<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Navigation } from 'swiper';

	export let images: string[];
</script>

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
	>
		{#each images as image}
			<SwiperSlide>
				<img src={image} class="item__image" alt="product" />
			</SwiperSlide>
		{/each}
	</Swiper>
	<div class="swiper__control">
		<button class="swiper__button swiper-button-prev">
			<img src="images/icon-previous.svg" alt="arrow left" />
		</button>
		<button class="swiper__button swiper-button-next">
			<img src="images/icon-next.svg" alt="arrow right" />
		</button>
	</div>
</div>

<style>
	.item__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.swiper__control {
		padding: 0 1em;
		z-index: var(--z-tooltip);
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
</style>
