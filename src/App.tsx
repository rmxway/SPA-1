import './styles/base.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from '@/components/ui/Navbar';
import { AboutPage } from '@/pages/About';
import { MainPage } from '@/pages/Main';
import { ProductsPage } from '@/pages/Products';

const App: React.FC = () => (
	<BrowserRouter>
		<Navbar />
		<div className="container">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="products" element={<ProductsPage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
		</div>
	</BrowserRouter>
);

export { App };
export default App;
