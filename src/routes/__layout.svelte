<script>
	import Navbar from './components/Navbar.svelte';

	import '../style.css';
	import 'swiper/css';
</script>

<Navbar />
<main class="main">
	<slot />
</main>
