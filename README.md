# News API

Esta é uma API para gerenciamento de notícias, permitindo listar, detalhar, criar, atualizar e deletar notícias.

## Tecnologias Utilizadas
- **Node.js**: Plataforma de execução do JavaScript no servidor.
- **Express**: Framework web minimalista para Node.js utilizado para criar a API.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **UUID**: Biblioteca para geração de identificadores únicos universais (UUIDs).
- **Dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **ts-node-dev**: Ferramenta para rodar e monitorar o código TypeScript no ambiente de desenvolvimento.

## Funcionalidades
- **Listar notícias**: Retorna uma lista de todas as notícias cadastradas na API.
- **Detalhar notícia**: Retorna os detalhes de uma notícia específica, identificada pelo seu ID.
- **Criar notícia**: Permite criar uma nova notícia fornecendo título, conteúdo e autor.
- **Atualizar notícia**: Atualiza os dados de uma notícia existente com base no ID.
- **Deletar notícia**: Remove uma notícia existente da base de dados com base no ID.

## Rotas
- `GET /news`: Retorna uma lista de todas as notícias.
- `GET /news/:id`: Retorna os detalhes de uma notícia específica.
- `POST /news`: Cria uma nova notícia.
- `PUT /news/:id`: Atualiza uma notícia existente.
- `DELETE /news/:id`: Remove uma notícia existente.

## Instalação
### Pré-requisitos
- **Node.js** (versão >= 16.0.0)
- **npm** ou **yarn**

### Passo a Passo
1. **Clone este repositório**:
   ```bash
   git clone https://github.com/Paulo-S-Nascimento/news-api.git
 
