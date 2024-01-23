export interface IProduct {
	id: number | null;
	title: string;
	description: string;
	brand?: string;
	category?: string;
	discountPercentage?: number;
	images?: string[];
	thumbnail: string;
	price: number | null;
	rating?: number;
	stock?: number;
	checked?: boolean;
	imgFetch: boolean;
	favorite?: boolean;
}

export interface DataFetch {
	limit: number;
	products: IProduct[];
	skip: number;
	total: number;
}
