import { boolean, InferType, object, string } from 'yup';

import { emailRegex, phoneRegex } from '@/services/regexes';

export const schemaOrder = object({
	name: string().required('Name is required').min(3, 'Must be at least 3 symbols').trim(),
	surname: string().required('Surname is required').min(5, 'Must be at least 5 symbols').trim(),
	phone: string()
		.required('Mobile phone is required')
		.trim()
		.matches(phoneRegex, { message: 'Phone is not correct', excludeEmptyString: true }),
	email: string()
		.required('Email is required')
		.trim()
		.matches(emailRegex, { message: 'Email address must be valid', excludeEmptyString: true }),
	deliveryAddress: string().required('Address is required'),
	toApartment: boolean(),
});

export type OrderFields = InferType<typeof schemaOrder>;
