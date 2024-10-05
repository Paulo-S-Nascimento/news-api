import { Router } from 'express';
import { NewsController } from '../controllers/news-controller';

const routes = Router();
const newsController = new NewsController();

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Retorna a lista de notícias
 *     responses:
 *       200:
 *         description: Lista de notícias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   author:
 *                     type: string
 */
routes.get('/news', newsController.list);

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Retorna detalhes de uma notícia específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da notícia
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes da notícia
 */
routes.get('/news/:id', newsController.detail);

/**
 * @swagger
 * /news:
 *   post:
 *     summary: Cria uma nova notícia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       201:
 *         description: Notícia criada com sucesso
 */
routes.post('/news', newsController.create);

/**
 * @swagger
 * /news/{id}:
 *   put:
 *     summary: Atualiza uma notícia existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da notícia
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notícia atualizada com sucesso
 */
routes.put('/news/:id', newsController.update);

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     summary: Deleta uma notícia existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da notícia
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Notícia deletada com sucesso
 */
routes.delete('/news/:id', newsController.delete);

export { routes };
