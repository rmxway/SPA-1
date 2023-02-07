import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { Container } from '@/components/Layout';
import { Navbar } from '@/components/Navbar';
import { CartPage, MainPage, Product , ProductsPage } from '@/pages';
import { defaultTheme } from '@/theme';
import { GlobalStyles } from '@/theme/styles/global';

const App: FC = () => (
	<BrowserRouter>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Navbar />
			<Container>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="products" element={<ProductsPage />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="/product/:productId" element={<Product />} />
				</Routes>
			</Container>
		</ThemeProvider>
	</BrowserRouter>
);

export { App };
export default App;
