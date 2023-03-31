import type { NextApiRequest, NextApiResponse } from 'next';

import { productsJSON } from './data/items.js';

export default function product(req: NextApiRequest, res: NextApiResponse) {
	const { query } = req;

    res.status(200).json(productsJSON.find((item) => item.id === Number(query.id)));
}
