import { emailRegex, phoneRegex } from '@/services/regexes';
import { boolean, InferType, object, string } from 'yup';

export const schemaOrder = object({
	name: string().min(3, 'Must be at least 3 symbols').required('Name is required').trim(),
	surname: string().min(5, 'Must be at least 5 symbols').required('Surname is required').trim(),
	phone: string()
		.matches(phoneRegex, { message: 'Phone is not correct', excludeEmptyString: true })
		.required('Mobile phone is required'),
	email: string()
		.matches(emailRegex, { message: 'Email address must be valid', excludeEmptyString: true })
		.required('Email is required'),
	deliveryAddress: string().required('Address is required').trim(),
	toApartment: boolean(),
});

export type OrderFields = InferType<typeof schemaOrder>;
