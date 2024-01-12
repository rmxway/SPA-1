type TitleType = 'Main' | 'Products' | 'Favorites' | 'Cart';
interface NavbarItemType {
	title: TitleType;
	url: string;
}

export const navbarItems: NavbarItemType[] = [
	{
		title: 'Main',
		url: '/',
	},
	{
		title: 'Products',
		url: '/products',
	},
	{
		title: 'Favorites',
		url: '/favorites',
	},
	{
		title: 'Cart',
		url: '/cart',
	},
];

export default navbarItems;
