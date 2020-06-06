import { Request, Response } from 'express';
import knex from '../database/connection';
import baseUrl from '../utils/baseUrl';

interface RequestCustom extends Request {
    fileValidationError: string;
}

class PointsController {
    async create(req: RequestCustom, res: Response) {
        
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = req.body;

        if(req.fileValidationError) {
            return res.status(404).end(req.fileValidationError);
        }

        const trx = await knex.transaction();

        const point = {
            image: req.file.filename,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };

        const insertedIds = await trx('points').insert(point);
        
        const point_id = insertedIds[0];
        
        const pointItems = items
            .split(',')
            .map((item: string) => Number(item.trim()))
            .map((item_id: number) => {
                return {
                    point_id,
                    item_id,
                };
            });

        await trx('point_items').insert(pointItems);
        
        await trx.commit();
        return res.json({
            id: point_id,
            ...point
        });
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const point = await knex('points')
            .where('id', id)
            .first();

        if (!point) {
            return res.status(400).json({ message: 'Point not found.' });
        }

        const base_url = `${baseUrl}uploads/`;

        const serializedPoints = {
            ...point,
            image_url: base_url+point.image
        };

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return res.json({ point: serializedPoints, items });
    }

    async index(req: Request, res: Response) {
        const { city, uf, items } = req.query;

        const parsedItems = String(items).split(',').map(item => 
            Number(item.trim())
        );

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        const base_url = `${baseUrl}uploads/`;

        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: base_url+point.image
            };
        });

        return res.json(serializedPoints);
    }
}

export default PointsController;