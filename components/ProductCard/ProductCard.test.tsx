import { render } from '@testing-library/react';

import { StyledComponentsRegistry } from '@/lib/registry';

import { ProductCard } from '.';

const mockProduct = {
	id: 6,
	title: 'Calvin Klein CK One',
	description:
		"CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
	category: 'fragrances',
	price: 49.99,
	discountPercentage: 0.32,
	rating: 4.85,
	tags: ['fragrances', 'perfumes'],
	brand: 'Calvin Klein',
	images: [
		'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png',
		'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png',
		'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png',
	],
	thumbnail: 'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png',
};

describe('ProductCard:', () => {
	it('Render card', () => {
		const { container, getByText } = render(
			<StyledComponentsRegistry isJest>
				<ProductCard product={mockProduct} />
			</StyledComponentsRegistry>,
		);

		const text = getByText(/Calvin Klein CK One/i);
		expect(text).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
