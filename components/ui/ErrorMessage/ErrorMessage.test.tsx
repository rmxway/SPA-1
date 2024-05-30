import { render } from '@testing-library/react';

import { ErrorMessage } from '@/components/ui';
import { StyledComponentsRegistry } from '@/lib/registry';

describe('ErrorMessage/UI', () => {
	it('Render is fine', () => {
		const error = 'Something went wrong...';
		const { container, getByText } = render(
			<StyledComponentsRegistry isJest>
				<ErrorMessage error={error} />
			</StyledComponentsRegistry>,
		);

		const text = getByText(error);

		expect(text).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
