import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/base.scss';
import Navbar from '@ui/Navbar';
import MainPage from '@pages/Main';
import ProductsPage from '@pages/Products';
import AboutPage from '@pages/About';

const App: React.FC = () => {
	return (
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
};

export default App;
