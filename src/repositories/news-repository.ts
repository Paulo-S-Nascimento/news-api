import { v4 as uuidv4 } from 'uuid';
import { News } from '../models/news-model';
import { newsDatabase } from '../database';

export class NewsRepository {
    private news = newsDatabase;

    public async listAll(): Promise<News[]> {
        return this.news;
    }

    public async getById(id: string): Promise<News | undefined> {
        return this.news.find(news => news.id === id);
    }

    public async create(title: string, content: string, author: string): Promise<News> {
        const newNews: News = { id: uuidv4(), title, content, author };
        this.news.push(newNews);
        return newNews;
    }

    public async update(id: string, news: News): Promise<News> {
        const newsIndex = this.news.findIndex(n => n.id === id);
        if (newsIndex === -1) throw new Error('Notícia não encontrada');
        this.news[newsIndex] = { ...this.news[newsIndex], ...news };
        return this.news[newsIndex];
    }

    public async delete(id: string): Promise<void> {
        const newsIndex = this.news.findIndex(news => news.id === id);
        if (newsIndex !== -1) {
            this.news.splice(newsIndex, 1); 
        }
    }
}
