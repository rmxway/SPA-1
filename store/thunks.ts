import { Action, Middleware } from 'redux';

import { ScrollToTop } from '@/services/helpers';
import { changePage, changeTypePage, resetItemsAction } from '@/store/reducers/products';

const afterChangePageScrollTop: Middleware = () => (next) => (action) => {
	if ((action as Action).type === changePage.type) {
		ScrollToTop();
	}

	return next(action);
};

const resetItemsAfterSwitchPage: Middleware = (state) => (next) => (action) => {
	if ((action as Action).type === changeTypePage.type) {
		state.dispatch({ type: resetItemsAction.type });
	}

	return next(action);
};

export const middlewares = [afterChangePageScrollTop, resetItemsAfterSwitchPage];
