import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
    
        let os = require('os');
        let networkInterfaces = os.networkInterfaces( );
        let arr = networkInterfaces['enp3s0']
        let ip = arr[0].address;

        const hostname = String(req.headers.host);
        const base_url = `http://${ip}:3333/uploads/`;
    
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