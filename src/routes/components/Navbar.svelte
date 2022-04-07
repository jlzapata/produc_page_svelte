<script lang="ts">
    let open = false;
</script>

<header class="header" id="header">
    <nav class="nav">
        <button type="button" class="icon-button nav__toggle" id="nav-toggle" on:click="{_ => open = true}">
            <img src="images/icon-menu.svg" alt="">
        </button>
        <div class="nav__menu_container" class:nav__menu_container-open={open} on:click="{_ => open = false}">
            <div class="nav__menu"  id="nav-menu">
                <button class="icon-button nav__close" id="nav-close" on:click="{_ => open = false}">
                    <img src="images/icon-close.svg" alt="close">
                </button>
                <ul class="nav__list">
                    <li class="nav__item"><a class="nav__item-text" href="/">Collections</a></li>
                    <li class="nav__item"><a class="nav__item-text" href="/">Men</a></li>
                    <li class="nav__item"><a class="nav__item-text" href="/">Women</a></li>
                    <li class="nav__item"><a class="nav__item-text" href="/">About</a></li>
                    <li class="nav__item"><a class="nav__item-text" href="/">Contact</a></li>
                </ul>
            </div>
        </div>
  
        <img src="images/logo.svg" class="nav__logo" alt="logo">
        <div class="nav__user">
            <img src="images/icon-cart.svg" alt="shopping cart">
            <img src="images/image-avatar.png" alt="user">
        </div>
    </nav>
</header>
