import type { NextApiRequest, NextApiResponse } from 'next';

import { productsJSON } from './data/items.js';

export default function products(req: NextApiRequest, res: NextApiResponse) {
	const { method, query } = req;
	let state;

	switch (method) {
		case 'GET':
			if (query) {
				Object.keys(query).forEach((key) => {
					if (key === 'limit') {
						state = [...productsJSON.slice(0, Number(query[key]))];
						res.status(200).json(state);
					}
				});
				res.status(200).json(productsJSON);
			}
			res.status(200).json(productsJSON);
			break;
		default:
			res.setHeader('Allow', ['GET', 'PUT']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
