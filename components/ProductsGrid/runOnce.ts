import { store } from '@/store';
import { asyncGetAllProducts } from '@/store/reducers/asyncGetAllProducts';

function* runOnce() {
	yield store.dispatch(asyncGetAllProducts({ params: { limit: 100 } }));
}

export const generator = runOnce();

export default generator;
