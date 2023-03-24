// export interface IProduct {
// 	checked: boolean;
//  imgFetch: boolean;
// 	id: number | null;
// 	title: string;
// 	price: number | null;
// 	description: string;
// 	category?: string;
// 	image?: string;
// 	rating?: {
// 		rate: number | null;
// 		count: number | null;
// 	};
// }

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
    favorite: boolean;
}
