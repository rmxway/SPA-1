import type { NextApiRequest, NextApiResponse } from 'next';

import { productsJSON } from './data/items.js';

export default function products(req: NextApiRequest, res: NextApiResponse) {
	const { method, query } = req;
	let state;

	try {
		if (method === 'GET') {
			const isQuery = Object.entries(query).length !== 0;

			if (isQuery) {
				Object.keys(query).forEach((key) => {
					if (key === 'limit') {
						state = [...productsJSON.slice(0, Number(query[key]))];
						res.status(200).json(state);
					}
				});
			} else {
				res.status(200).json(productsJSON);
			}
		} else {
			res.setHeader('Allow', ['PUT']);
			res.status(405).end(`Method ${method} Not Allowed`);
		}
	} catch (error) {
		res.status(500).json({ error });
	}
}
