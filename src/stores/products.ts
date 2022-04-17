import type { Product } from 'src/models/product.type';

const product: Product = {
	id: 1,
	name: 'Fall Limited Edition Sneakers',
	description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
durable rubber outer sole, they’ll withstand everything the weather can offer.`,
	price: 250,
	discount: 50,
	images: [
		'images/image-product-1.jpg',
		'images/image-product-2.jpg',
		'images/image-product-3.jpg',
		'images/image-product-4.jpg'
	]
};

export const products: Product[] = [product];
