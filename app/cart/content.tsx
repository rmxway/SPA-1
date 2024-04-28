'use client';

import { Container } from '@/components/Layout';
import { StepCart, StepFinal, StepForm } from '@/modules/cart';
import { useAppSelector } from '@/services';
import { cartStore } from '@/store';

export const ContentCart = () => {
	const { step } = useAppSelector(cartStore);

	return (
		<Container $pt $flex>
			{step === 1 && <StepCart />}
			{step === 2 && <StepForm />}
			{step === 3 && <StepFinal />}
		</Container>
	);
};
