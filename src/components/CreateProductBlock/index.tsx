/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';

import { ButtonUI } from '@/components/ui/Button';
import { InputUI } from '@/components/ui/Input';
import { IProduct } from '@/interfaces';

interface CreateProductType {
	addProduct: (product: IProduct) => void;
}

const defaultProduct = {
	id: null,
	title: '',
	description: '',
	price: null,
};

const CreateProductBlock: FC<CreateProductType> = ({ addProduct }) => {
	const [newProduct, setNewProduct] = useState<IProduct>(defaultProduct);
	const [isError, setIsError] = useState<boolean>(false);

	const validateFields = () => {
		const condition = !newProduct.title.trim().length || !newProduct.description.trim().length || !newProduct.price;

		setIsError(condition);
	};

	const createProductHandle = () => {
		validateFields();
		if (isError) return;

		addProduct(newProduct);
		setNewProduct(defaultProduct);
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
			<InputUI name="title" label="Title" value={newProduct.title} onChange={onChange} />
			<InputUI name="description" label="Description" value={newProduct.description} onChange={onChange} />
			<InputUI name="price" label="Price" value={Number(newProduct.price)} onChange={onChange} />

			<ButtonUI success onClick={createProductHandle}>
				Create Product
			</ButtonUI>
			{isError && <div>Enter correct information</div>}
		</div>
	);
};

export { CreateProductBlock };
export default CreateProductBlock;
