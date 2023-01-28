import './styles/base.scss';

import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from '@/components/ui/Navbar';
import { CartPage } from '@/pages/Cart';
import { MainPage } from '@/pages/Main';
import { ProductsPage } from '@/pages/Products';

import ProductsProvider from './components/providers/ProductsProvider';

const App: FC = () => (
	<BrowserRouter>
		<ProductsProvider productCount={8}>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="products" element={<ProductsPage />} />
					<Route path="cart" element={<CartPage />} />
				</Routes>
			</div>
		</ProductsProvider>
	</BrowserRouter>
);

export { App };
export default App;
