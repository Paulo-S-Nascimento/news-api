import { Router } from 'express'
import { NewsController } from '../controllers/news-controller'

const routes = Router()
const newsController = new NewsController();

routes.get('/news', newsController.list); 
routes.get('/news/:id', newsController.detail); 
routes.post('/news', newsController.create); 
routes.put('/news/:id', newsController.update); 
routes.delete('/news/:id', newsController.delete);

export { routes };
