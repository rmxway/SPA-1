import { headers } from 'next/headers';

export const domainData = () => headers().get('host');
