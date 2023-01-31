import './styles/base.scss';

import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from '@/components/ui/Navbar';
import { CartPage } from '@/pages/Cart';
import { MainPage } from '@/pages/Main';
import { ProductsPage } from '@/pages/Products';
import { fetchProducts } from '@/service/fetchProducts';

const App: FC = () => {
	useEffect(() => {
		fetchProducts(8);
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="products" element={<ProductsPage />} />
					<Route path="cart" element={<CartPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export { App };
export default App;
