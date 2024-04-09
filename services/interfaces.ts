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

export interface SortTypes {
	name: 'rating' | 'price' | 'default';
	toggle?: boolean;
}

export type TypePages = 'products' | 'favorites';

export interface Category {
	name: 'all' | string;
	active: boolean;
}

export interface ProductsState {
	title: string;
	fetchedItems: IProduct[];
	reservedItems: IProduct[];
	total: number;
	countPerPage: number;
	countFavorites: number;
	categories: Category[];
	page: number;
	productsPage: number;
	favoritesPage: number;
	typePage: TypePages;
	error: string;
	fetching: boolean;
	sort: SortTypes;
	search: string;
}

export type Icofont = keyof typeof icofont;
