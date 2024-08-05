# Teste :: Desenvolvedor FullStack Jr.

Este repositório é o resultado de um teste para a vaga de Desenvolvedor FullStack Jr. O teste consistiu em criar uma aplicação completa com uma API em Node.js e um frontend em Vue.js. A aplicação é containerizada utilizando Docker e Docker Compose.

## Descrição do Projeto

O projeto é composto por três principais componentes:

1. **Backend**: API desenvolvida em Node.js utilizando Express e Sequelize para interação com o banco de dados.
2. **Frontend**: Interface desenvolvida em Vue.js que consome a API para exibir os dados.
3. **Banco de Dados**: MySQL utilizado para armazenar e gerenciar dados.

### Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - Sequelize (ORM)
  - TypeScript
  - Arquitetura em camadas
  - API RESTful

- **Frontend**:
  - Vue.js
  - JavaScript
  - Vite (para desenvolvimento)

- **Banco de Dados**:
  - MySQL
  - Docker (para containerização)

## Estrutura do Banco de Dados

O banco de dados possui várias tabelas inter-relacionadas:

- **Orders**: Contém informações sobre pedidos.
  - Relacionado com `cnpjs`, `users`, `buyers` e `providers`.
- **Buyers**: Representa os sacados.
- **Providers**: Representa os cedentes.
- **CNPJs**: Contém informações de CNPJ.
- **Users**: Contém informações dos usuários.

O campo `orderStatusBuyer` na tabela de pedidos (`orders`) representa o status do buyer, com os seguintes valores e suas descrições:

- `0`: Pendente de confirmação
- `1`: Pedido confirmado
- `2`: Não reconhece o pedido
- `3`: Mercadoria não recebida
- `4`: Recebida com avaria
- `5`: Devolvida
- `6`: Recebida com devolução parcial
- `7`: Recebida e confirmada
- `8`: Pagamento Autorizado

## Execução do Projeto

Para rodar a aplicação, siga as instruções abaixo:

1. **Certifique-se de ter o Docker e o Docker Compose instalados.**

2. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd teste-tecnico-CashForce/
   ```
Suba os contêineres utilizando Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. **Acesse o frontend no navegador:**

Abra seu navegador e acesse a URL: [http://localhost:5173/](http://localhost:5173/)

## Estrutura de Diretórios

- `frontend/`: Contém o código-fonte do frontend (Vue.js).
- `backend/`: Contém o código-fonte do backend (Node.js/Express).
- `db/`: Contém a configuração e dados do banco de dados MySQL.
