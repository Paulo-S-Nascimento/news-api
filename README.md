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

## Passo a Passo
1. **Clone este repositório**:
   - git clone https://github.com/Paulo-S-Nascimento/news-api.git

## Abra a pasta do projeto:
- cd caminho/para/a/pasta


## Instale as dependências:
- npm install


## Compile o projeto:
- npm run build
  

## inicie o servidor:
- npm start
  

**O servidor estará disponível em http://localhost:5432/api/v1/news**




## Endpoints

### Listar todas as notícias

- **Método**: `GET`
- **URL**: `/news`
- **Descrição**: Retorna uma lista de todas as notícias.

---

### Obter detalhes de uma notícia

- **Método**: `GET`
- **URL**: `/news/:id`
- **Descrição**: Retorna os detalhes de uma notícia específica.
- **Parâmetros**:
  - `id`: O ID da notícia.

---

### Criar uma nova notícia

- **Método**: `POST`
- **URL**: `/news`
- **Descrição**: Cria uma nova notícia.
- **Corpo da Requisição**:
  ```json
  {
    "title": "Título da notícia",
    "content": "Conteúdo da notícia",
    "author": "Autor da notícia"
  }

---

### Atualizar uma notícia existente

- **Método**: `PUT`
- **URL**: `/news/:id`
- **Descrição**: Atualiza uma notícia existente.
- **Parâmetros**:
  - `id`: O ID da notícia.
- **Corpo da Requisição**:
  ```json
  {
    "title": "Novo título",
    "content": "Novo conteúdo",
    "author": "Novo autor"
  }

---

  ### Deletar uma notícia 

- **Método**: `DELETE`
- **URL**: `/news/:id`
- **Descrição**: Deleta uma notícia.
- **Parâmetros**:
  - `id`: O ID da notícia.

 ---

# Documentação Postman

Fornece exemplos de requisições para os endpoints da News API. Abaixo estão descritos os métodos e suas respectivas URLs, parâmetros e exemplos de corpo da requisição.

## Coleção no Postman

Você pode acessar a coleção completa da API no Postman através deste link:

[![Postman Collection](https://run.pstmn.io/button.svg)](https://www.postman.com/flight-candidate-50490402/ca4f632b-c020-4fb8-a347-3fb8060222b5/collection/vevu2x2/news-api)

---
 
