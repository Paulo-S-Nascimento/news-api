import { News } from "models/news-model";
import { NewsRepository } from '../repositories/news-repository';

interface UpdateOptions {
    title?: string;
    content?: string;
    author?: string;
}

export class UpdateNewsService {
    private readonly newsRepository: NewsRepository;

    constructor() {
        this.newsRepository = new NewsRepository();
    }

    public async exec(id: string, options: UpdateOptions): Promise<News> {
        this.validateId(id);

        const existingNews = await this.newsRepository.getById(id);
        if (!existingNews) {
            throw new Error('Notícia não encontrada');
        }

    
        if (options.title) existingNews.title = options.title;
        if (options.content) existingNews.content = options.content;
        if (options.author) existingNews.author = options.author;


        const updatedNews = await this.newsRepository.update(id, existingNews);
        return updatedNews;
    }

    private validateId(id: string): void {
        if (!id || id === null) throw new Error('ID inválido');
    }
}
