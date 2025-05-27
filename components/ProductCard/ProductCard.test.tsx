import { render } from '@testing-library/react';

import { StyledComponentsRegistry } from '@/lib/registry';

import { ProductCard } from '.';
import { mockProduct } from './mockProduct';

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
