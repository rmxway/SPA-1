import { useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { useGetProductsQuery } from '@/store/api';

export const useGetProduct = (id: string) => {
	useGetProductsQuery();
	const { fetchedItems, error, fetching } = useAppSelector(productsStore);
	const product = fetchedItems.find((item) => item.id === Number(id));

	return { fetching, error, product };
};
