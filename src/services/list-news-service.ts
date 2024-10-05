import { News } from "models/news-model";
import { NewsRepository } from '../repositories/news-repository';


export class ListNewsService {
    private readonly newsRepository: NewsRepository

    constructor() {
        this.newsRepository = new NewsRepository()
    }

    public async exec(): Promise<News[]> {
        const news = await this.newsRepository.listAll()
        return news
    }
}