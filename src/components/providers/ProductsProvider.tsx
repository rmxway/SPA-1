import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { IProduct } from '@/interfaces';

interface ProductsProviderContextResult {
	products: IProduct[];
	loading: boolean;
	error: string;
	deleteProduct: (id: number) => void;
	createProduct: (product: IProduct) => void;
	sortPriceProduct: (param: string) => void;
	sortRatingProduct: (param: string) => void;
}

const ProductsContext = createContext<ProductsProviderContextResult>({} as ProductsProviderContextResult);

const ProductsProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
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

	const sortPriceProduct = useCallback(() => {
		setProducts((prev) => [
			...prev.sort((a, b) => {
				if (a.price && b.price) {
					if (Number(a.price) > Number(b.price)) return 1;
					if (Number(a.price) < Number(b.price)) return -1;
				}
				return 0;
			}),
		]);
	}, []);

	const sortRatingProduct = useCallback(() => {
		setProducts((prev) => [
			...prev.sort((a, b) => {
				if (a.rating?.rate && b.rating?.rate) {
					if (Number(a.rating.rate) > Number(b.rating.rate)) return 1;
					if (Number(a.rating.rate) < Number(b.rating.rate)) return -1;
				}
				return 0;
			}),
		]);
	}, []);

	useEffect(() => {
		getProducts();
	}, []);

	const contextValue = useMemo(
		() => ({
			products,
			loading,
			error,
			deleteProduct,
			createProduct,
			sortPriceProduct,
			sortRatingProduct,
		}),
		[products, loading, error, deleteProduct, createProduct, sortPriceProduct, sortRatingProduct]
	);
	return <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>;
};

const useProductsContext = () => useContext(ProductsContext);

export { useProductsContext };
export default ProductsProvider;
