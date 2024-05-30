import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Flexbox } from '@/components/Layout';
import { Button } from '@/components/ui';
import { OrderFields, schemaOrder } from '@/modules/cart/services/schemaOrder';
import { submitOrder } from '@/modules/cart/services/submitOrder';
import { TableProducts } from '@/modules/cart/StepForm/TableProducts';
import { useAppDispatch } from '@/services';
import { changeStep } from '@/store/reducers/cart';

import { InputOrder, SwitchOrder } from './helpers';
import { WrapperForm, WrapperStepForm } from './styled';

export const StepForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, dirtyFields },
	} = useForm<OrderFields>({
		resolver: yupResolver(schemaOrder),
		mode: 'all',
	});

	const inputCommonProps = { errors, register, dirtyFields };

	const dispatch = useAppDispatch();

	const prevStep = () => {
		dispatch(changeStep(1));
	};

	const onSubmit: SubmitHandler<OrderFields> = (data) => {
		if (data && isValid) {
			submitOrder(data);
			dispatch(changeStep(3));
		}
	};

	return (
		<>
			<Button $margins icon="cart" onClick={prevStep} style={{ width: 'fit-content' }}>
				Back
			</Button>
			<h4>Check your products and fill required fields.</h4>
			<br />
			<WrapperStepForm $gap={40} $templateColumns="1fr 1fr">
				<WrapperForm>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Flexbox $gap={10}>
							<InputOrder label="Name *" placeholder="Mary" name="name" {...inputCommonProps} />
							<InputOrder label="Surname *" placeholder="Climber" name="surname" {...inputCommonProps} />
							<InputOrder
								label="Email *"
								placeholder="mary-climber@gmail.com"
								name="email"
								{...inputCommonProps}
							/>
							<InputOrder
								label="Mobile phone *"
								placeholder="+7 (999) 999-99-99"
								name="phone"
								mask="+7 (000) 000-00-00"
								{...inputCommonProps}
							/>
							<InputOrder
								label="Delivery address *"
								placeholder="Main street, 32"
								name="deliveryAddress"
								{...inputCommonProps}
							/>
							<SwitchOrder label="To apartment" name="toApartment" {...inputCommonProps} />
							<Button type="submit" $success disabled={!isValid}>
								Submit
							</Button>
						</Flexbox>
					</form>
				</WrapperForm>
				<TableProducts fGrow />
			</WrapperStepForm>
		</>
	);
};
