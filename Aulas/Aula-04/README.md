# Aula 04 — Consumindo APIs no Front-end

## Introdução

A Aula 04 da disciplina de **Frameworks Front-end** teve como tema principal o consumo de **APIs no desenvolvimento Front-end**.

Durante a aula foram apresentados conceitos fundamentais sobre APIs, comunicação entre sistemas, protocolo HTTP, endpoints, JSON, servidores Back-end, Web Services e criação de APIs REST utilizando **Express.js**.

Também foram realizadas atividades práticas envolvendo a pesquisa de projetos que utilizam APIs e o desenvolvimento de uma API própria para ser consumida por uma aplicação Front-end.

---

## Conteúdos da Aula

Durante a aula foram abordados os seguintes conceitos:

- API — Application Programming Interface;
- REST — Representational State Transfer;
- Protocolo HTTP;
- Métodos HTTP;
- Endpoints;
- JSON — JavaScript Object Notation;
- Comunicação cliente-servidor;
- Servidor Back-end;
- Web Services;
- Express.js;
- APIs REST;
- CORS;
- Node.js;
- Deploy de APIs;
- Render;
- Consumo de APIs no Front-end.

---

# API — Application Programming Interface

Uma **API (Application Programming Interface)** é uma interface que permite a comunicação entre diferentes aplicações ou componentes de software.

Por meio de uma API, diferentes sistemas podem trocar informações de maneira organizada, permitindo que uma aplicação utilize dados ou funcionalidades fornecidas por outra aplicação.

Um exemplo é uma aplicação Front-end realizando uma requisição para uma API e recebendo os dados necessários para apresentar na interface.

---

# REST

**REST (Representational State Transfer)** é um estilo arquitetural utilizado no desenvolvimento de aplicações distribuídas e serviços Web.

Entre suas principais características estão:

- Comunicação cliente-servidor;
- Comunicação sem estado (*stateless*);
- Utilização dos métodos HTTP;
- Recursos identificados por URLs;
- Utilização de formatos de representação de dados, como JSON.

---

# Protocolo HTTP

O **HTTP (Hypertext Transfer Protocol)** é um protocolo utilizado para comunicação na Web.

Ele permite que clientes e servidores realizem a troca de informações por meio de requisições e respostas.

O funcionamento básico pode ser representado da seguinte forma:

```text
Cliente / Front-end
        ↓
   Requisição HTTP
        ↓
Servidor / API
        ↓
   Processamento
        ↓
   Resposta HTTP
        ↓
Cliente / Front-end
Características
Modelo cliente-servidor;
Comunicação baseada em requisições e respostas;
Comunicação stateless;
Utilização de métodos HTTP.
Métodos HTTP

Os principais métodos HTTP estudados são:

Método	Finalidade
GET	Recuperar informações
POST	Criar novos recursos
PUT	Substituir completamente um recurso
PATCH	Atualizar parcialmente um recurso
DELETE	Remover um recurso
GET

Utilizado para consultar ou recuperar informações.

POST

Utilizado para criar novos recursos.

PUT

Utilizado para substituir completamente um recurso existente.

PATCH

Utilizado para atualizar parcialmente um recurso.

DELETE

Utilizado para remover um recurso.

Endpoint

Um endpoint é um endereço específico disponibilizado por uma API para acessar determinado recurso ou funcionalidade.

Exemplo:

GET /usuarios

Nesse exemplo, /usuarios representa o endpoint utilizado para consultar informações de usuários.

JSON

JSON (JavaScript Object Notation) é um formato utilizado para representar e transmitir dados entre sistemas.

Exemplo:

{
  "nome": "Toninho",
  "idade": 18
}

O JSON é bastante utilizado na comunicação entre Front-end e APIs por possuir uma estrutura simples e fácil de interpretar.

Comunicação entre Front-end e API

A comunicação entre uma aplicação Front-end e uma API ocorre por meio de requisições HTTP.

O processo pode ser representado da seguinte maneira:

1. Usuário acessa a aplicação
              ↓
2. Front-end realiza uma requisição HTTP
              ↓
3. API recebe a requisição
              ↓
4. API processa a solicitação
              ↓
5. Servidor retorna os dados
              ↓
6. Dados são enviados em JSON
              ↓
7. Front-end apresenta as informações

Esse processo permite que uma aplicação Front-end utilize dados fornecidos por um servidor ou serviço externo.

Servidor Back-end

O Back-end é responsável pelo processamento das requisições e pelo fornecimento dos dados utilizados pelas aplicações.

Entre suas funções estão:

Processar requisições;
Gerenciar dados;
Executar regras de negócio;
Disponibilizar APIs;
Retornar respostas para o cliente.
Web Service

Um Web Service é um serviço disponibilizado pela Web que permite a comunicação entre diferentes aplicações.

Por meio de protocolos como HTTP e HTTPS, sistemas desenvolvidos utilizando diferentes tecnologias podem trocar informações.

Express.js

O Express.js é um framework para Node.js utilizado para facilitar a criação de servidores Web e APIs.

Entre suas funcionalidades estão:

Criação de servidores;
Definição de rotas;
Criação de endpoints;
Utilização de middlewares;
Criação de APIs REST;
Tratamento de requisições e respostas.
CORS

CORS (Cross-Origin Resource Sharing) é um mecanismo utilizado pelos navegadores para controlar a comunicação entre aplicações hospedadas em diferentes origens.

Ele é importante principalmente quando o Front-end e a API estão hospedados em endereços diferentes.

Exemplo:

Front-end
https://meu-front.vercel.app

        ↓

API
https://minha-api.onrender.com

A configuração adequada do CORS permite que essas aplicações possam se comunicar.

Atividade 01 — Projetos GitHub com Consumo de APIs
Descrição

A primeira atividade prática consistiu em pesquisar 10 projetos disponíveis no GitHub que utilizam APIs.

Os projetos foram analisados com o objetivo de identificar informações como:

Nome do projeto;
Repositório no GitHub;
Framework utilizado;
API consumida;
Link de deploy, quando disponível.

As informações encontradas foram organizadas em uma tabela no formato Markdown.

Resultado da Atividade

Foi realizada uma pesquisa com 10 projetos que utilizam APIs, permitindo observar diferentes aplicações e formas de integração entre Front-end e serviços externos.

A atividade ajudou a compreender, de maneira prática, como APIs podem ser utilizadas em diferentes tipos de projetos Web.

Repositório da Atividade 01

O resultado da pesquisa está disponível no GitHub:

ProjetosAPI

https://github.com/mocotoTonin/ProjetosAPI

Atividade 02 — API de Data e Hora
Descrição

A segunda atividade prática consistiu no desenvolvimento de uma API utilizando Node.js e Express, responsável por fornecer informações de data e hora.

Além da API, foi desenvolvido um Front-end separado, responsável por consumir os dados disponibilizados pela API e apresentar as informações na interface.

Os projetos foram versionados utilizando Git e GitHub e posteriormente publicados utilizando serviços de deploy.

Estrutura da Atividade

O funcionamento da aplicação pode ser representado da seguinte forma:

API — Node.js + Express
        ↓
Endpoint de data e hora
        ↓
Requisição HTTP
        ↓
Front-end
        ↓
Consumo da API
        ↓
Exibição da data e hora

A atividade foi dividida em dois projetos:

API — Back-end
Front-end — Aplicação que consome a API
API — Back-end

A API foi desenvolvida utilizando Node.js e Express.js.

Sua função é disponibilizar um endpoint responsável por fornecer informações de data e hora para aplicações clientes.

Tecnologias utilizadas
Node.js;
Express.js;
JavaScript;
HTTP;
JSON;
CORS;
Git;
GitHub;
Render.
Repositório da API

https://github.com/mocotoTonin/api-data-hora

API publicada no Render

https://api-data-hora-y82i.onrender.com/

Front-end

Foi desenvolvido um projeto Front-end separado para realizar o consumo da API.

A aplicação realiza uma requisição HTTP para a API e utiliza os dados recebidos para apresentar as informações de data e hora na interface.

Tecnologias utilizadas
HTML;
CSS;
JavaScript;
API;
Git;
GitHub;
Vercel.
Repositório do Front-end

https://github.com/mocotoTonin/frontend-data-hora

Deploy

Após o desenvolvimento, os projetos foram publicados utilizando serviços de hospedagem.

A API foi disponibilizada utilizando o Render, enquanto o Front-end foi publicado utilizando a Vercel.

O processo pode ser representado da seguinte maneira:

Desenvolvimento
      ↓
Git
      ↓
GitHub
      ↓
Deploy da API
      ↓
Render
      ↓
API Online
      ↓
Front-end
      ↓
Vercel
      ↓
Aplicação Online
API — Render

A API desenvolvida para a atividade foi publicada no Render.

URL da API:

https://api-data-hora-y82i.onrender.com/

O endereço disponibilizado pelo Render permite que o Front-end realize as requisições para obter os dados fornecidos pela API.

Aplicação Online — Vercel

O Front-end foi publicado utilizando a Vercel.

URL da aplicação:

https://frontend-data-hora-two.vercel.app/

A aplicação utiliza a API desenvolvida para obter as informações de data e hora e apresentar os dados ao usuário.

Links da Atividade 02
API — GitHub

https://github.com/mocotoTonin/api-data-hora

API — Render

https://api-data-hora-y82i.onrender.com/

Front-end — GitHub

https://github.com/mocotoTonin/frontend-data-hora

Front-end — Vercel

https://frontend-data-hora-two.vercel.app/

Tecnologias e Ferramentas
Tecnologia	Utilização
HTML	Estrutura da aplicação
CSS	Estilização da interface
JavaScript	Lógica das aplicações
Node.js	Ambiente de execução da API
Express.js	Desenvolvimento da API
JSON	Formato de troca de dados
HTTP	Comunicação entre aplicações
CORS	Comunicação entre diferentes origens
Git	Versionamento
GitHub	Armazenamento do código
Render	Deploy da API
Vercel	Deploy do Front-end
Aprendizados

A Aula 04 permitiu compreender como aplicações Front-end podem se comunicar com APIs e serviços externos.

Entre os principais conhecimentos desenvolvidos estão:

Conceito de API;
Conceito de REST;
Funcionamento do protocolo HTTP;
Métodos HTTP;
Endpoints;
Estrutura JSON;
Comunicação cliente-servidor;
Conceito de Web Service;
Criação de APIs REST;
Utilização do Express.js;
Utilização do CORS;
Versionamento com Git e GitHub;
Deploy de APIs;
Consumo de APIs no Front-end.
Conclusão

A Aula 04 apresentou conceitos fundamentais para o desenvolvimento de aplicações Web que utilizam comunicação entre diferentes sistemas.

O estudo de APIs, HTTP, JSON e endpoints permitiu compreender como uma aplicação Front-end pode realizar requisições e consumir informações disponibilizadas por um servidor.

As atividades práticas permitiram aplicar esses conceitos em diferentes situações. Na Atividade 01, foram pesquisados e analisados projetos disponíveis no GitHub que utilizam APIs.

Na Atividade 02, foi desenvolvida uma API própria utilizando Node.js e Express, além de um Front-end responsável por consumir os dados disponibilizados pela API.

Também foram praticados conceitos de Git, GitHub, Render e Vercel, passando pelas etapas de desenvolvimento, versionamento, deploy e publicação das aplicações na internet.

Links
Atividade 01

Repositório:

https://github.com/mocotoTonin/ProjetosAPI

Atividade 02

API — GitHub:

https://github.com/mocotoTonin/api-data-hora

API — Render:

https://api-data-hora-y82i.onrender.com/

Front-end — GitHub:

https://github.com/mocotoTonin/frontend-data-hora

Front-end — Vercel:

https://frontend-data-hora-two.vercel.app/

Repositório Principal da Disciplina

https://github.com/mocotoTonin/senai-frameworks-frontend