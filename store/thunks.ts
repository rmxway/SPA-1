import { Action, Middleware } from 'redux';

import { ScrollToTop } from '@/services/helpers';
import { changePage } from '@/store/reducers/products';

const afterChangePageScrollTop: Middleware = () => (next) => (action) => {
	if ((action as Action).type === changePage.type) {
		ScrollToTop(0, true);
	}

	return next(action);
};

export const middlewares = [afterChangePageScrollTop];
