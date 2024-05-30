import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '@/components/ui';
import { StyledComponentsRegistry } from '@/lib/registry';

describe('Button/UI:', () => {
	it('Render is fine', async () => {
		const user = userEvent.setup();
		const clickFn = jest.fn();

		const { getByRole, container } = render(
			<StyledComponentsRegistry isJest>
				<Button onClick={clickFn}>Button</Button>
			</StyledComponentsRegistry>,
		);

		const button = getByRole('button');

		expect(button).toBeInTheDocument();
		expect(container).toMatchSnapshot();

		await user.click(button);

		expect(clickFn).toHaveBeenCalledTimes(1);
	});

	it('$inactive is fine', () => {
		const { getByRole } = render(
			<StyledComponentsRegistry isJest>
				<Button $inactive>Inactive Button</Button>
			</StyledComponentsRegistry>,
		);

		expect(getByRole('button')).toHaveStyle('pointer-events: none');
	});

	it('Icon is valid', () => {
		const icon = 'cart';
		const { container } = render(
			<StyledComponentsRegistry isJest>
				<Button icon={icon}>Cart</Button>
			</StyledComponentsRegistry>,
		);

		const iconElement = container.getElementsByTagName('i')[0];
		expect(iconElement.className.includes(`icofont-${icon}`)).toBeTruthy();
	});
});
