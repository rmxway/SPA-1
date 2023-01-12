export interface IProduct {
	id: string | number;
	title: string;
	price?: string | number;
	description: string;
	category?: string;
	image?: string;
	rating?: {
		rate: string | number;
		count: string | number;
	};
}
