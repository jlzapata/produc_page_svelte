import type { itemCart } from 'src/models/itemCart.type';
import type { Product } from 'src/models/product.type';
import { writable, derived } from 'svelte/store';
import { products } from './products';

function createCart() {
	const { subscribe, set, update } = writable<itemCart[]>([]);

	return {
		subscribe,
		addItem: (product: Product, quantity: number) =>
			update((itemStore) => {
				let currentItem: itemCart;
				if (itemStore.some((item) => item.productId === product.id)) {
					const index = itemStore.findIndex((item) => item.productId === product.id);
					currentItem = itemStore[index];
					currentItem.quantity += quantity;
				} else {
					itemStore.push({ productId: product.id, quantity });
				}

				return itemStore;
			}),
		removeItem: (productId: number) =>
			update((itemStore) => {
				const index = itemStore.findIndex((item) => item.productId === productId);
				itemStore.splice(index, 1);
				return itemStore;
			}),
		reset: () => set([])
	};
}

export const cart = createCart();
export const cartItems = derived(cart, (items): [product: Product, quantity: number][] => {
	return items.map((item) => {
		return [products.find((c) => c.id == item.productId), item.quantity];
	});
});

export const cartTotal = derived(cart, (items): number => {
	return items.reduce((total, item) => {
		return item.quantity;
	}, 0);
});
