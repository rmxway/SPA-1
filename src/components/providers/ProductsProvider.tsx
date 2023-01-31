import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

import { useAppDispatch } from '@/hooks';
import { IProduct } from '@/interfaces';
import { getProducts } from '@/store/reducers/products';

interface ProductsProviderContextResult {
	loading: boolean;
	error: string;
}

interface PropsTypes extends PropsWithChildren {
	productCount: number;
}

const ProductsContext = createContext<ProductsProviderContextResult>({} as ProductsProviderContextResult);

const ProductsProvider: FC<PropsTypes> = ({ productCount, children }) => {
	const dispatch = useAppDispatch();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const getFetch = async () => {
		setError('');
		try {
			setLoading(true);
			const result = await fetch(`https://fakestoreapi.com/products?limit=${productCount}`);
			const json: IProduct[] = await result.json();
			json.forEach((item) => {
				item.checked = false;
			});
			dispatch(getProducts(json));
		} catch (e) {
			setError((e as Error).message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getFetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const contextValue = useMemo(
		() => ({
			loading,
			error,
		}),
		[loading, error]
	);
	return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext };
export default ProductsProvider;
