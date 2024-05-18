import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Input } from '@/components/ui';
import { StyledComponentsRegistry } from '@/lib/registry';

describe('Input/UI', () => {
	it('Render is fine', () => {
		const { container } = render(
			<StyledComponentsRegistry isJest>
				<Input name="phone" label="Phone" mask="+7 (000) 000-00-00" error="Your phone is not correct" />
			</StyledComponentsRegistry>,
		);

		expect(container).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('Type masked phone number is fine', async () => {
		const user = userEvent.setup();
		const onChangeFn = jest.fn();
		const text = '73253442312';

		const { getByRole, container } = render(
			<StyledComponentsRegistry isJest>
				<Input name="phone" onChange={onChangeFn} label="Phone" mask="+7 (000) 000-00-00" />
			</StyledComponentsRegistry>,
		);

		const input = getByRole('textbox') as HTMLInputElement;

		await user.type(input, text);

		expect(input.value).toMatch('+7 (325) 344-23-12');
		expect(container).toMatchSnapshot();
	});
});
