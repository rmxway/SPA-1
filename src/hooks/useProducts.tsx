import { useEffect, useState } from 'react';
import { IProduct } from '@src/interfaces';

interface HookProductTypes {
	products: IProduct[];
	loading: Boolean;
	error: string;
	deleteProduct: (id: number) => void;
	createProduct: (product: IProduct) => void;
}

function useProducts(): HookProductTypes {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState<Boolean>(false);
	const [error, setError] = useState<string>('');

	const getProducts = async () => {
		setError('');
		try {
			setLoading(true);
			await fetch('https://fakestoreapi.com/products?limit=6')
				.then((res) => res.json())
				.then((json) => setProducts(json));
		} catch (e) {
			setError((e as Error).message);
		} finally {
			setLoading(false);
		}
	};

	const deleteProduct = (id: number) => {
		setProducts(products.filter((a) => a.id !== id));
	};

	const createProduct = (product: IProduct) => {
		product.id = Math.floor(Math.random() * 1000000);
		setProducts((prev) => [...prev, product]);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return { products, loading, error, deleteProduct, createProduct };
}

export default useProducts;
