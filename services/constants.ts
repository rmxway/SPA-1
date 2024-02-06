export const currency = '$';

export const productsUrl =
	process.env.NODE_ENV === 'development' ? `${process.env.API_URL}/api/products` : '/api/products';

export default currency;
