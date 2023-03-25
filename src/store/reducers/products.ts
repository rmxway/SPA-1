import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';
import { asyncGetAllProducts } from '@/store/reducers/asyncGetAllProducts';

interface ProductsState {
	fetchedItems: IProduct[];
	currentItems: IProduct[];
	favoriteItems: IProduct[];
	toggledItems: number[];
	total: number;
	countPerPage: number;
	page: number;
	pageFavorites: number;
	error: string;
	fetching: boolean;
	sort: {
		name: string;
		toggle?: boolean;
	};
	search: {
		value: string;
	};
}

interface SortTypes {
	sort: 'rating' | 'price' | 'reset';
	toggle?: boolean;
}

const initialState: ProductsState = {
	fetchedItems: [],
	currentItems: [],
	favoriteItems: [],
	toggledItems: [],
	total: 0,
	page: 1,
	pageFavorites: 1,
	countPerPage: 12,
	error: '',
	fetching: false,
	sort: {
		name: '',
		toggle: true,
	},
	search: {
		value: '',
	},
};

const changeStateSort = (state: ProductsState, payload: SortTypes) => {
	state.sort = {
		name: payload.sort,
		toggle: payload.toggle,
	};
};

const iterationToggle = (state: ProductsState) => {
	state.fetchedItems.forEach((item) => {
		const isToggled = !!state.toggledItems.find((toggleItem) => toggleItem === item.id);
		item.checked = isToggled;
	});
};

type SetProductsPayload = {
	products: IProduct[];
	total: number;
	page: number;
	count: number;
};

export type TypePages = 'page' | 'pageFavorites';

const productsReducer = createSlice({
	name: 'products',
	initialState,
	reducers: {
		fetching: (state, action: PayloadAction<boolean>) => {
			state.fetching = action.payload;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
		toggleProduct: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const isToggled = !!state.toggledItems.find((item) => item === id);

			if (isToggled) {
				state.toggledItems = state.toggledItems.filter((item) => item !== Number(id));
			} else {
				state.toggledItems.push(Number(id));
			}

			state.toggledItems = [...new Set([...state.toggledItems])];

			iterationToggle(state);
		},
		removeAllToggledProducts: (state) => {
			state.toggledItems = [];
			iterationToggle(state);
		},
		fetchingImageProduct: (state, action: PayloadAction<{ id: number; fetch: boolean }>) => {
			const { fetch, id } = action.payload;
			const el = state.fetchedItems.find((item) => item.id === id);
			if (el) el.imgFetch = fetch;
		},
		sortProducts: (state, action: PayloadAction<SortTypes>) => {
			const { sort, toggle } = action.payload;
			changeStateSort(state, action.payload);

			if (sort === 'reset') {
				state.sort.name = '';
				state.sort.toggle = true;
				state.fetchedItems.sort((a, b) => {
					if (Number(a.id) < Number(b.id)) return -1;
					if (Number(a.id) > Number(b.id)) return 1;
					return 0;
				});
				return;
			}

			state.fetchedItems.sort((a, b) => {
				if (a[sort] && b[sort]) {
					if (Number(a[sort]) > Number(b[sort])) return -1;
					if (Number(a[sort]) < Number(b[sort])) return 1;
				}
				return 0;
			});

            state.page = 1;

			if (!toggle) state.fetchedItems = state.fetchedItems.reverse();
		},
		searchProduct: (state, action: PayloadAction<string>) => {
			state.search.value = action.payload.trim();

			if (state.search.value.length) {
				state.currentItems = state.fetchedItems.filter((item) =>
					item.title.toLowerCase().includes(state.search.value.toLowerCase())
				);
				state.total = state.fetchedItems.length;
			} else {
				state.total = state.fetchedItems.length;
			}
		},
		toggleFavorite: (state, action: PayloadAction<number>) => {
			const current = state.fetchedItems.find((item) => item.id === action.payload);
			if (current) current.favorite = !current.favorite;
			state.favoriteItems = state.fetchedItems.filter((item) => item.favorite);
		},
		changePage: (state, action: PayloadAction<{ key: TypePages; page: number }>) => {
			const { key, page } = action.payload;
			if (key === 'page' || key === 'pageFavorites') state[key] = page;
			state.search.value = '';
		},
		setCurrentItems: (state, action: PayloadAction<{ items: IProduct[]; page: number }>) => {
			const { items, page } = action.payload;

			const filteredItems = items.splice((page - 1) * state.countPerPage, state.countPerPage);
			state.currentItems = filteredItems;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(asyncGetAllProducts.pending, (state) => {
				state.fetching = true;
				state.error = '';
			})
			.addCase(asyncGetAllProducts.fulfilled, (state, action: PayloadAction<SetProductsPayload>) => {
				const { products, total, count, page } = action.payload;

				products.forEach((item) => {
					item.imgFetch = true;
					item.favorite = false;
				});

				state.total = total;
				state.page = page;
				state.countPerPage = count;

				state.fetchedItems = [...products];

				state.fetching = false;
				state.error = '';
			})
			.addCase(asyncGetAllProducts.rejected, (state, action) => {
				state.error = String(action.payload);
				state.fetching = false;
			});
	},
});

const { actions, reducer } = productsReducer;

export const {
	fetching,
	setError,
	toggleProduct,
	removeAllToggledProducts,
	fetchingImageProduct,
	sortProducts,
	searchProduct,
	toggleFavorite,
	changePage,
	setCurrentItems,
} = actions;

export default reducer;
