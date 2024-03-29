import icofont from '@/public/assets/fonts/icofont/icofont.json';

export interface IProduct {
	id: number | null;
	title: string;
	description: string;
	brand?: string;
	category?: string;
	discountPercentage?: number;
	images?: string[];
	thumbnail: string;
	price: number;
	rating?: number;
	stock?: number;
	checked?: boolean;
	imgFetch?: boolean;
	favorite?: boolean;
	count?: number;
}

export interface DataFetch {
	limit: number;
	products: IProduct[];
	skip: number;
	total: number;
}

export type Icofont = keyof typeof icofont;
