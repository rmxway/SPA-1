import { FC } from 'react';

const MainPage: FC = () => (
	<div>
		<h1>Main Page</h1>
		<p>
			Simple SPA with fake products. Use create-react-app and service{' '}
			<a href="https://fakestoreapi.com" target="_blank" rel="noreferrer">
				fakestoreapi.com
			</a>
		</p>
		<p>Full list of packages:</p>
		<ul>
			<li>React</li>
			<li>React Router</li>
			<li>Typescript</li>
			<li>CSS Modules</li>
			<li>SCSS</li>
			<li>API from fakestoreapi.com</li>
			<li>Craco</li>
			<li>Prettier</li>
		</ul>
	</div>
);

export { MainPage };
export default MainPage;
