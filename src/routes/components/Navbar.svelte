<script lang="ts">
	import CloseButton from './CloseButton.svelte';

	import Cart from './Cart.svelte';

	import CartNotification from './CartNotification.svelte';

	let open = false;
	let cartOpen = false;
</script>

<header class="header" id="header">
	<nav class="nav">
		<button
			name="toggle-menu"
			type="button"
			class="icon-button nav__toggle"
			id="nav-toggle"
			on:click={(_) => (open = true)}
		>
			<img src="images/icon-menu.svg" alt="" />
		</button>
		<img src="images/logo.svg" class="nav__logo" alt="logo" />
		<div
			class="nav__menu_container"
			class:nav__menu_container-open={open}
			on:click|self={(_) => (open = false)}
		>
			<div class="nav__menu" id="nav-menu">
				<CloseButton class="nav__close" on:click={(_) => (open = false)} />
				<ul class="nav__list">
					<li class="nav__item"><a class="nav__item-text" href="/">Collections</a></li>
					<li class="nav__item"><a class="nav__item-text" href="/">Men</a></li>
					<li class="nav__item"><a class="nav__item-text" href="/">Women</a></li>
					<li class="nav__item"><a class="nav__item-text" href="/">About</a></li>
					<li class="nav__item"><a class="nav__item-text" href="/">Contact</a></li>
				</ul>
			</div>
		</div>
		<div class="nav__user">
			<CartNotification on:click={() => (cartOpen = !cartOpen)} />
			<img class="user-thumbnail" src="images/image-avatar.png" alt="user" />
		</div>
	</nav>
</header>
{#if cartOpen}
	<div class="cart__container">
		<Cart />
	</div>
{/if}
