import { SubmitHandler } from 'react-hook-form';

import { store } from '@/store';

import { OrderFields } from './schemaOrder';

export const submitOrder: SubmitHandler<OrderFields> = async (data): Promise<void> => {
	const { items: cartItems, totalPrice } = store.getState().cart;
	const items = cartItems.map(({ id, title, price, count, category }) => ({
		id,
		title,
		price: price * (count || 1),
		count,
		category,
	}));

	Object.assign(data, { products: { items, totalPrice } });

	try {
		const res = await fetch('http://localhost:3000/api/order', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		if (!res.ok) {
			throw new Error('Something went wrong ...');
		}
	} catch (err) {
		throw new Error((err as Error).message);
	}
};
