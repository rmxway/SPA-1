import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

import { useAppDispatch } from '@/hooks';
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
			const json = await result.json();
			dispatch(getProducts(json));
			return json;
		} catch (e) {
			setError((e as Error).message);
			return '';
		} finally {
			setLoading(false);
		}
	};

	// const deleteProduct = useCallback((id: number) => setProducts(products.filter((a) => a.id !== id)), [products]);

	// const createProduct = useCallback((product: IProduct) => {
	// 	product.id = Math.floor(Math.random() * 1000000);
	// 	setProducts((prev) => [product, ...prev]);
	// }, []);

	// const addToCard = useCallback(
	// 	(id: number) => {
	// 		if (products) {
	// 			const uniCart = new Set([...cart, ...products.filter((a) => a.id === id)]);
	// 			setCart([...uniCart]);
	// 		}
	// 	},
	// 	[cart, products]
	// );

	// const totalPrice = useCallback(() => {
	// 	let total = 0;
	// 	cart.forEach((item) => {
	// 		if (item.price) total += item.price;
	// 	});
	// 	return total;
	// }, [cart]);

	// const sortProduct = useCallback((param: keyof IProduct, toggle: boolean) => {
	// 	setProducts((prev) => [
	// 		...prev.sort((a, b) => {
	// 			if (a[param] && b[param]) {
	// 				if (Number(a[param]) > Number(b[param])) return 1;
	// 				if (Number(a[param]) < Number(b[param])) return -1;
	// 			}
	// 			return 0;
	// 		}),
	// 	]);

	// 	if (toggle) setProducts((prev) => [...prev.reverse()]);
	// }, []);

	// const sortRatingProduct = useCallback((toggle: boolean) => {
	// 	setProducts((prev) => [
	// 		...prev.sort((a, b) => {
	// 			if (a.rating?.rate && b.rating?.rate) {
	// 				if (Number(a.rating.rate) > Number(b.rating.rate)) return 1;
	// 				if (Number(a.rating.rate) < Number(b.rating.rate)) return -1;
	// 			}
	// 			return 0;
	// 		}),
	// 	]);

	// 	if (toggle) setProducts((prev) => [...prev.reverse()]);
	// }, []);

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
