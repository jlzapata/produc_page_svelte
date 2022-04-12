<script>

import Navbar from "./components/Navbar.svelte";
import Slider from "./components/Slider.svelte";
import SliderItem from "./components/SliderItem.svelte";

</script>
<Navbar></Navbar>
<main class="main">
    <section class="slider-container">
        <Slider itemCount={3}>
            <svelte:fragment slot="items" let:width let:from let:to>
                <SliderItem index={0} {from} {to} {width}></SliderItem>
                <SliderItem index={1} {from} {to} {width}></SliderItem>
                <SliderItem index={2} {from} {to} {width}></SliderItem>
            </svelte:fragment>
        </Slider>
    </section>  
</main>


