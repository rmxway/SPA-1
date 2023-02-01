import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Container } from '@/components/Layout';
import { Navbar } from '@/components/ui/Navbar';
import { CartPage } from '@/pages/Cart';
import { MainPage } from '@/pages/Main';
import { ProductsPage } from '@/pages/Products';
import { fetchProducts } from '@/service/fetchProducts';
import { defaultTheme } from '@/theme';
import { GlobalStyles } from '@/theme/styles/global';

const App: FC = () => {
	useEffect(() => {
		fetchProducts(8);
	}, []);

	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Navbar />
				<Container>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="products" element={<ProductsPage />} />
						<Route path="cart" element={<CartPage />} />
					</Routes>
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export { App };
export default App;
