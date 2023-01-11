import React from 'react';
import Product from '@src/components/Product';
import CreateProductBlock from '@src/components/CreateProductBlock';
import { IProduct } from '@src/interfaces';
import useProducts from '@src/hooks/useProducts';

const ProductsPage: React.FC = () => {
	const { products, loading, error, deleteProduct, createProduct } =
		useProducts();

	return (
		<div>
			<h1>Products Page</h1>
			<CreateProductBlock addProduct={createProduct} />

			{loading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			<div className="products-wrapper">
				{products &&
					products.map((product: IProduct, index) => (
						<Product
							product={product}
							key={product.id}
							delProduct={deleteProduct}
							index={index}
						/>
					))}
			</div>
		</div>
	);
};

export default ProductsPage;
