export interface IProduct {
	checked: boolean;
    imgFetch: boolean;
	id: number | null;
	title: string;
	price: number | null;
	description: string;
	category?: string;
	image?: string;
	rating?: {
		rate: number | null;
		count: number | null;
	};
}
