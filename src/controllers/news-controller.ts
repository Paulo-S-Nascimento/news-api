import { Request, Response } from 'express';

import { CreateNewsService } from '../services/create-news-service';
import { DeleteNewsService } from '../services/delete-news-service';
import { DetailNewsService } from '../services/detail-news-service';
import { ListNewsService } from '../services/list-news-service';
import { UpdateNewsService } from '../services/update-news-service';

export class NewsController { 

    // GET /news
    public async list(request: Request, response: Response): Promise<Response> {
        const listNewsService = new ListNewsService();
        const news = await listNewsService.exec();
        return response.json(news);
    }

    // GET /news/:id
    public async detail(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const detailNewsService = new DetailNewsService();
        const news = await detailNewsService.exec(String(id));

        if (!news) {
            return response.status(404).json({ "error": "Notícia não encontrada" });
        }

        return response.json(news);
    }

    // POST /news
    public async create(request: Request, response: Response): Promise<Response> {
        const { title, content, author} = request.body;

        const createNewsService = new CreateNewsService();
        const news = await createNewsService.exec(title, content, author);

        if (!news) {
            return response.status(422).json({ "error": "Título ou conteúdo inválido" });
        }

        return response.status(201).json(news);
    }

    // PUT /news/:id
    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { title, content, author } = request.body;
        const updateNewsService = new UpdateNewsService();
        const updateOptions = { title, content, author};

        try {
            const news = await updateNewsService.exec(String(id), updateOptions);
            return response.json(news);
        } catch (error) {
            if (error.message.includes('Notícia não encontrada')) {
                return response.status(404).json({ error: error.message });
            }
            return response.status(400).json({ error: error.message });
        }
    }

    // DELETE /news/:id
    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteNewsService = new DeleteNewsService();

        try {
            await deleteNewsService.exec(String(id));
            return response.status(204).send({ "message": "Notícia deletada com sucesso" });
        } catch (error) {
            return response.status(404).json({ error: "Notícia não encontrada" });
        }
    }
}
