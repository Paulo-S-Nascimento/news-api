import { News } from "models/news-model"
import { NewsRepository } from '../repositories/news-repository';

export class DetailNewsService {
    private readonly newsRepository: NewsRepository

    constructor() {
        this.newsRepository = new NewsRepository ()
    }
    
    public async exec(id: string): Promise<News> {
        const news = await this.newsRepository.getById(id)
        return news
     }
}

