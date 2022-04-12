<script lang="ts">
import type { SvelteComponentTyped } from "svelte";


    export let visibleItems = 1;
    export let itemCount:number;
    let startIndex = 0;
    let transitioning = false;
    export let items: [];
    export let builder: (item: any, index: number) => SvelteComponentTyped | HTMLElement;

    function next(){
        transitioning = true;
    }

    function transitionend(){
        startIndex+= visibleItems;
        transitioning = false;
    }
</script>

<ul class="slider__item-container" class:transitioning
    style="right:{transitioning? 100 : 0}%" on:click={next}
    on:transitionend={transitionend}>
    <!-- {#each items as item}
        
    {/each} -->
    <slot name="items" width={100 / visibleItems} from={startIndex} to={startIndex + visibleItems}></slot>
</ul>

<style>
.slider__item-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  will-change: right;
}

.transitioning {
    transition: right .4s ease-in-out; 
}

</style>