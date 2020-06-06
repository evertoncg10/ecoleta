import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {

    /*Métodos no controller:
        index => Listagem de todos (listAll), 
        show => listagem de um único registro (list), 
        create => criar novo registro, 
        update => atualizar um registro,
        delete => deletar um registro
        */

    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        });
        return response.json(serializedItems);
    }
}

export default ItemsController;