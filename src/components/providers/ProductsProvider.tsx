import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { IProduct } from '@/interfaces';

interface ProductsProviderContextResult {
	cart: IProduct[];
	products: IProduct[];
	loading: boolean;
	error: string;
	deleteProduct: (id: number) => void;
	createProduct: (product: IProduct) => void;
	addToCard: (id: number) => void;
	sortProduct: (param: keyof IProduct, toggle?: boolean) => void;
	sortRatingProduct: (param: boolean) => void;
}

const ProductsContext = createContext<ProductsProviderContextResult>({} as ProductsProviderContextResult);

const ProductsProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [cart, setCart] = useState<IProduct[]>([]);
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const getProducts = async () => {
		setError('');
		try {
			setLoading(true);
			const result = await fetch('https://fakestoreapi.com/products?limit=6');
			const json = await result.json();
			setProducts(json);
			return json;
		} catch (e) {
			setError((e as Error).message);
			return '';
		} finally {
			setLoading(false);
		}
	};

	const deleteProduct = useCallback((id: number) => setProducts(products.filter((a) => a.id !== id)), [products]);

	const createProduct = useCallback((product: IProduct) => {
		product.id = Math.floor(Math.random() * 1000000);
		setProducts((prev) => [product, ...prev]);
	}, []);

	const addToCard = useCallback(
		(id: number) => {
			if (products) setCart((prev) => [...prev, ...products.filter((a) => a.id === id)]);
		},
		[products]
	);

	const sortProduct = useCallback((param: keyof IProduct, toggle?: boolean) => {
		setProducts((prev) => [
			...prev.sort((a, b) => {
				if (a[param] && b[param]) {
					if (Number(a[param]) > Number(b[param])) return 1;
					if (Number(a[param]) < Number(b[param])) return -1;
				}
				return 0;
			}),
		]);

		if (toggle) setProducts((prev) => [...prev.reverse()]);
	}, []);

	const sortRatingProduct = useCallback((toggle: boolean) => {
		setProducts((prev) => [
			...prev.sort((a, b) => {
				if (a.rating?.rate && b.rating?.rate) {
					if (Number(a.rating.rate) > Number(b.rating.rate)) return 1;
					if (Number(a.rating.rate) < Number(b.rating.rate)) return -1;
				}
				return 0;
			}),
		]);

		if (toggle) setProducts((prev) => [...prev.reverse()]);
	}, []);

	useEffect(() => {
		getProducts();
	}, []);

	const contextValue = useMemo(
		() => ({
			cart,
			products,
			loading,
			error,
			deleteProduct,
			createProduct,
			addToCard,
			sortProduct,
			sortRatingProduct,
		}),
		[cart, products, loading, error, deleteProduct, createProduct, addToCard, sortProduct, sortRatingProduct]
	);
	return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext };
export default ProductsProvider;
