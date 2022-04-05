<script lang="ts">
    let open = false;
</script>

<header class="header" id="header">
    <nav class="nav">
        <button type="button" class="icon-button nav__toggle" id="nav-toggle" on:click="{_ => open = true}">
            <img src="images/icon-menu.svg" alt="">
        </button>
        <div class="nav__menu" class:nav__menu-open={open} id="nav-menu">
            <button class="icon-button nav__close" id="nav-close" on:click="{_ => open = false}">
                <img src="images/icon-close.svg" alt="close">
            </button>
            <ul class="nav__list">
                <li class="nav__item">Collections</li>
                <li class="nav__item">Men</li>
                <li class="nav__item">Women</li>
                <li class="nav__item">About</li>
                <li class="nav__item">Contact</li>
            </ul>
        </div>
        <img src="images/logo.svg" class="nav__logo" alt="logo">
        <div class="nav__user">
            <img src="images/icon-cart.svg" alt="shopping cart">
            <img src="images/image-avatar.png" alt="user">
        </div>
    </nav>
</header>
