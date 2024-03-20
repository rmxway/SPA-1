export const currency = '$';

export const VERSION = '1.001';

export const isDev = process.env.NODE_ENV === 'development';

export const protocol = isDev ? 'http' : 'https';

export default currency;
