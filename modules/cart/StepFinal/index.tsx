import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Button, GradientText, Icon } from '@/components/ui';
import { TableProducts } from '@/modules/cart/StepForm/TableProducts';
import { removeAllProducts } from '@/store/reducers/combineActions';

import { WrapperFinal } from './styled';

export const StepFinal = () => {
	const router = useRouter();

	const handleBackToProducts = () => {
		router.push('/products');
	};

	useEffect(
		() => () => {
			removeAllProducts();
		},
		[],
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

			<Button animate $dark onClick={handleBackToProducts}>
				Go to products
			</Button>
		</WrapperFinal>
	);
};
export default StepFinal;
