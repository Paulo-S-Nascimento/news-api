import { News } from "models/news-model";
import { NewsRepository } from '../repositories/news-repository';

export class DeleteNewsService {
    private readonly newsRepository: NewsRepository;

    constructor() {
        this.newsRepository = new NewsRepository();
    }

    public async exec(id: string): Promise<void> {
        const existingNews = await this.newsRepository.getById(id);

        if (!existingNews) {
            throw new Error('Notícia não encontrada');
        }

        await this.newsRepository.delete(id);
    }
}
