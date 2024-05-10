import { render } from '@testing-library/react';

import { StyledComponentsRegistry } from '@/lib/registry';

import Page from './page';

describe('Main page test:', () => {
	it('Render text', () => {
		const { getByText, container } = render(
			<StyledComponentsRegistry isJest>
				<Page />
			</StyledComponentsRegistry>,
		);

		const text = getByText(/Delete favorites|Nothing was't add to favorites, go to/i);

		expect(text).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
