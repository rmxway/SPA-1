import React, { FC, useState } from 'react';
import ButtonUI from '@components/ui/Button';
import InputUI from '@components/ui/Input';
import { IProduct } from '@src/interfaces';

interface CreateProductType {
	addProduct: Function;
}

const defaultProduct = {
	id: null,
	title: '',
	description: '',
};

const CreateProductBlock: FC<CreateProductType> = ({ addProduct }) => {
	const [newProduct, setNewProduct] = useState<IProduct>(defaultProduct);
	const [isError, setIsError] = useState<Boolean>(false);

	const createProductHandle = () => {
		validateFields();

		console.log(isError);

		if (!isError) {
			addProduct(newProduct);
			setNewProduct(defaultProduct);
		}
	};

	const validateFields = () => {
		// console.log(newProduct);

		if (
			newProduct.title.trim().length ||
			newProduct.description.trim().length
		) {
			setIsError(true);
		}
		setIsError(false);
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// resolve this problem
		// setNewProduct(prev => { ...prev, [e.target.id]: e.target.value });		
	};

	return (
		<div className="layerBlock">
			<InputUI
				name="title"
				label="Title"
				value={newProduct.title}
				onChange={onChange}
			/>

			<InputUI
				name="description"
				label="Description"
				value={newProduct.description}
				onChange={onChange}
			/>
			{isError && (
				<p style={{ color: 'red' }}>Please enter correct information</p>
			)}
			<ButtonUI onClick={createProductHandle}>Create Product</ButtonUI>
		</div>
	);
};

export default CreateProductBlock;
