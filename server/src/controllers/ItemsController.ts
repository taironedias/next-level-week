import { Request, Response } from 'express';
import knex from '../database/connection';
import baseUrl from '../utils/baseUrl';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');

        const base_url = `${baseUrl}uploads/`;

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: base_url+item.image
            }
        });

        return res.json(serializedItems);
    }
}

export default ItemsController;