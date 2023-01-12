/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from 'react';
import ButtonUI from '@components/ui/Button';
import InputUI from '@components/ui/Input';
import { IProduct } from '@src/interfaces';

interface CreateProductType {
	addProduct: Function;
}

const defaultProduct = {
	id: '',
	title: '',
	description: '',
	price: '',
};

const CreateProductBlock: FC<CreateProductType> = ({ addProduct }) => {
	const [newProduct, setNewProduct] = useState<IProduct>(defaultProduct);
	const [isError, setIsError] = useState<Boolean>(false);

	const createProductHandle = () => {
		validateFields();
		if (isError) return;

		addProduct(newProduct);
		setNewProduct(defaultProduct);
	};

	const validateFields = () => {
		const condition =
			!newProduct.title.trim().length ||
			!newProduct.description.trim().length ||
			!newProduct.price;

		setIsError(condition);
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewProduct((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};

	useEffect(() => {
		validateFields();
	}, [newProduct]);

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
			<InputUI
				name="price"
				label="Price"
				value={newProduct.price}
				onChange={onChange}
			/>

			<ButtonUI success onClick={createProductHandle}>
				Create Product
			</ButtonUI>
			{isError && <div>Enter correct information</div>}
		</div>
	);
};

export default CreateProductBlock;
