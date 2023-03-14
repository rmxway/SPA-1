import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { Navbar } from '@/components/Navbar';
import { CartPage, FavoritesPage, MainPage, ProductPage, ProductsPage, UIPage } from '@/pages';
import { defaultTheme } from '@/theme';
import { GlobalStyles } from '@/theme/styles/global';

const App: FC = () => (
	<BrowserRouter>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Navbar />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/ui" element={<UIPage />} />
				<Route path="products" element={<ProductsPage />} />
				<Route path="favorites" element={<FavoritesPage />} />
				<Route path="cart" element={<CartPage />} />
				<Route path="/product/:productId" element={<ProductPage />} />
			</Routes>
		</ThemeProvider>
	</BrowserRouter>
);

export { App };
export default App;
