import type { NextApiRequest, NextApiResponse } from 'next';

import { productsJSON } from './data/items.js';

export default function product(req: NextApiRequest, res: NextApiResponse) {
	const { query } = req;
	try {
		const isQuery = Object.entries(query).length !== 0;
		if (isQuery) {
			res.status(200).json(productsJSON.find((item) => item.id === Number(query.id)));
		}
	} catch (error) {
		res.status(500).json({ error });
	}
}
