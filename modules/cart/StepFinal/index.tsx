import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Button, GradientText, Icon } from '@/components/ui';
import { TableProducts } from '@/modules/cart/StepForm';
import { useAppDispatch } from '@/services';
import { changeStep } from '@/store/reducers/cart';
import { removeAllProducts } from '@/store/reducers/combineActions';

import { WrapperFinal } from './styled';

export const StepFinal = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleBackToProducts = () => {
		router.push('/products');
	};

	useEffect(
		() => () => {
			removeAllProducts();
			dispatch(changeStep(1));
		},
		[dispatch],
	);

	return (
		<WrapperFinal>
			<TableProducts />
			<Icon icon="favorite" size={75} as="i" />
			<div>
				<GradientText size={40} style={{ marginBottom: 20 }} gradient="dark">
					<strong>Congratulations :)</strong>
				</GradientText>
				<p>You have been made an order and our manager will contact you shortly</p>
			</div>

			<Button animate $black onClick={handleBackToProducts}>
				Go to products
			</Button>
		</WrapperFinal>
	);
};
export default StepFinal;
