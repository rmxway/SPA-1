import { render } from '@testing-library/react';

import { StyledComponentsRegistry } from '@/lib/registry';

import { ProductCard } from '.';

const mockProduct = {
	id: 1,
	title: 'iPhone 9',
	description: 'An apple mobile which is nothing like apple',
	price: 549,
	discountPercentage: 12.96,
	rating: 4.69,
	stock: 94,
	brand: 'Apple',
	category: 'smartphones',
	thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
	images: ['https://cdn.dummyjson.com/product-images/1/1.jpg', 'https://cdn.dummyjson.com/product-images/1/2.jpg'],
};

describe('ProductCard:', () => {
	it('Render card', () => {
		const { container, getByText } = render(
			<StyledComponentsRegistry isJest>
				<ProductCard product={mockProduct} />
			</StyledComponentsRegistry>,
		);

		const text = getByText(/iPhone 9/i);
		expect(text).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
