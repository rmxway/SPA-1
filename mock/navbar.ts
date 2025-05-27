import { isDev } from '@/services';

type TitleType = 'Main' | 'Products' | 'Favorites' | 'Cart' | 'UI';
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

if (isDev)
	navbarItems.splice(1, 0, {
		title: 'UI',
		url: '/ui',
	});

export default navbarItems;
