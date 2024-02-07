import { productsUrl } from '@/services';
import { domainData } from '@/services/domainData';

export const getProducts = async () => {
	const { http, host } = await domainData();

	try {
		const res = await fetch(`${http}://${host}${productsUrl}`);
		if (res.ok) return res.json();
	} catch (error) {
		// eslint-disable-next-line no-console
		throw new Error((error as Error).message);
	}
	return [];
};
