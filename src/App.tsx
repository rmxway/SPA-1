import './styles/base.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from '@/components/ui/Navbar';
import { AboutPage } from '@/pages/About';
import { MainPage } from '@/pages/Main';
import { ProductsPage } from '@/pages/Products';

import ProductsProvider from './components/providers/ProductsProvider';

const App: React.FC = () => (
	<BrowserRouter>
		<ProductsProvider>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="products" element={<ProductsPage />} />
					<Route path="about" element={<AboutPage />} />
				</Routes>
			</div>
		</ProductsProvider>
	</BrowserRouter>
);

export { App };
export default App;
