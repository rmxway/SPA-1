import { headers } from 'next/headers';

export const domainData = () => headers().get(':authority:') ?? headers().get('host');
