import { Button, GradientText, Icon } from '@/components/ui';
import { WrapperFinal } from './styled';
import { memo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/services';
import { changeStep } from '@/store/reducers/cart';
import { TableProducts } from '../StepForm';
import { removeAllProducts } from '@/store/reducers/combineActions';

export const StepFinal = memo(() => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleBackToProducts = () => {
		router.push('/products');
	};

	useEffect(() => {
		return () => {
            removeAllProducts();
			dispatch(changeStep(1));
		};
	}, []);

	return (
		<WrapperFinal>
            <TableProducts />
			<Icon icon="favorite" size={75} as="i" />
			<div>
				<GradientText size={40} style={{ marginBottom: 20 }} gradient="dark">
					<strong>{`Congratulations :)`}</strong>
				</GradientText>
				<p>You have been made an order and our manager will contact you shortly</p>
			</div>

			<Button animate $black onClick={handleBackToProducts}>
				Go to products
			</Button>
		</WrapperFinal>
	);
});
export default StepFinal;
