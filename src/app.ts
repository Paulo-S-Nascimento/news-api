import express from 'express';
import { routes } from './routes';
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

dotenv.config();

const app = express();
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'News API', 
      version: '1.0.0', 
      description: 'API para gerenciamento de notícias',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5432}/api/v1`, 
      },
    ],
  },
  apis: ['./routes/*.ts'], 
};


const swaggerDocs = swaggerJsdoc(swaggerOptions);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/v1', routes);

export { app };
