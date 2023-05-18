import { FC, useCallback, useState } from 'react';

import { ButtonUI, InputUI } from '@/components/ui';
import { IProduct } from '@/services';

interface CreateProductType {
	addProduct: (product: IProduct) => void;
}

const defaultProduct = {
	id: null,
	title: '',
	description: '',
	price: null,
	checked: false,
	imgFetch: false,
	favorite: false,
	thumbnail: '',
};

const CreateProductBlock: FC<CreateProductType> = ({ addProduct }) => {
	const [newProduct, setNewProduct] = useState<IProduct>(defaultProduct);
	const [isError, setIsError] = useState<boolean>(false);

	const validateFields = useCallback(() => {
		const condition = !newProduct.title.trim().length || !newProduct.description.trim().length || !newProduct.price;

		setIsError(condition);
	}, [newProduct]);

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
