import { productsUrl, protocol } from '@/services';
import { domainData } from '@/services/domainData';

export const getProduct = async (id: string) => {
	const host = domainData();
	try {
		const res = await fetch(`${protocol}://${host}${productsUrl}/${id}`);
		if (res.ok) return res.json();
	} catch (error) {
		// eslint-disable-next-line no-console
		throw new Error((error as Error).message);
	}
	return [];
};
