import { News } from '../models/news-model'
import { NewsRepository } from '../repositories/news-repository';

export class CreateNewsService {
    private readonly newsRepository: NewsRepository

    constructor() {
        this.newsRepository = new NewsRepository ()
    }
    public async exec(title: string, content: string, author: string): Promise<News> {
        this.validate(title, content, author)
    
     let news = await this.newsRepository.create(title, content, author)
    
     return news
    
     }   

     private validate(title: string, content: string, author: string): void {
        if (!title) throw new Error('Insira um título');
        if (!content) throw new Error('Insira um conteúdo');
        if (!author) throw new Error('Insira um autor');
    }
}


