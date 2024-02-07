import { headers } from 'next/headers';

export const domainData = () => {
	const host = headers().get('host');
	const http = headers().get('referer')?.split('://')[0];

	return { http, host };
};
