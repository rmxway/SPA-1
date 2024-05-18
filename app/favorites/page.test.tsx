import { render } from '@testing-library/react';

import { StyledComponentsRegistry } from '@/lib/registry';

import Page from './page';

describe('Favorite page test:', () => {
	it('Render text', () => {
		const { container, getByText } = render(
			<StyledComponentsRegistry isJest>
				<Page />
			</StyledComponentsRegistry>,
		);

		const text = getByText(/Delete favorites|Nothing was't add to favorites, go to/i);
		expect(text).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
