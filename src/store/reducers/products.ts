import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '@/interfaces';
import { asyncGetAllProducts } from '@/store/reducers/asyncGetAllProducts';

interface ProductsState {
	fetchedItems: IProduct[];
	items: IProduct[];
	toggledItems: number[];
	total: number;
	page: number;
	count: number;
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
	items: [],
	toggledItems: [],
	total: 0,
	page: 1,
	count: 12,
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

const changeItemsForCurrentPage = (state: ProductsState) => {
	state.items = [...state.fetchedItems];
	state.items = state.items.splice((state.page - 1) * state.count, state.count);
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

	changeItemsForCurrentPage(state);
};

type SetProductsPayload = {
	products: IProduct[];
	total: number;
	page: number;
	count: number;
};

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
		fetchingImageProduct: (state, action: PayloadAction<{ id: number; fetch: boolean }>) => {
			const { fetch, id } = action.payload;
			state.fetchedItems.forEach((item) => {
				if (item.id === id) item.imgFetch = fetch;
			});
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
				changeItemsForCurrentPage(state);
				return;
			}

			state.fetchedItems.sort((a, b) => {
				if (a[sort] && b[sort]) {
					if (Number(a[sort]) > Number(b[sort])) return -1;
					if (Number(a[sort]) < Number(b[sort])) return 1;
				}
				return 0;
			});

			if (!toggle) state.fetchedItems = state.fetchedItems.reverse();
			changeItemsForCurrentPage(state);
		},
		searchProduct: (state, action: PayloadAction<string>) => {
			state.search.value = action.payload.trim();

			if (state.search.value.length) {
				state.items = state.fetchedItems.filter((item) =>
					item.title.toLowerCase().includes(state.search.value.toLowerCase())
				);
				state.total = state.items.length;
			} else {
				changeItemsForCurrentPage(state);
				state.total = state.fetchedItems.length;
			}
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
			state.search.value = '';
			changeItemsForCurrentPage(state);
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

				state.fetching = false;
				state.error = '';

				products.forEach((item) => {
					item.imgFetch = true;
				});

				state.total = total;
				state.page = page;
				state.count = count;

				state.fetchedItems = [...products];
				changeItemsForCurrentPage(state);
			})
			.addCase(asyncGetAllProducts.rejected, (state, action) => {
				state.error = String(action.payload);
				state.fetching = false;
			});
	},
});

const { actions, reducer } = productsReducer;

export const { fetching, setError, toggleProduct, fetchingImageProduct, sortProducts, searchProduct, changePage } =
	actions;

export default reducer;
