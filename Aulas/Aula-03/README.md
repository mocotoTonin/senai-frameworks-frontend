# Aula 03 — Projetos com Frameworks Front-end

## Introdução

A Aula 03 da disciplina de **Frameworks Front-end** teve como foco o estudo dos principais frameworks e bibliotecas utilizados no desenvolvimento de aplicações Web modernas.

Durante a aula foram apresentados conceitos relacionados a **Frameworks Front-end, bibliotecas, componentização, programação reativa, gerenciamento de estado, roteamento, integração com APIs e ferramentas de desenvolvimento**.

Também foram estudadas as tecnologias **React, Vue.js, Angular e Next.js**, suas principais características e formas de criação e organização de projetos.

---

# Conteúdos da Aula

Durante a aula foram abordados os seguintes conteúdos:

- Introdução aos Frameworks Front-end;
- Diferença entre Framework e Biblioteca;
- React;
- Vue.js;
- Angular;
- Next.js;
- Componentização;
- Programação reativa;
- Gerenciamento de estado;
- Virtual DOM;
- Sistema de rotas;
- Integração com APIs;
- Ferramentas de Build e Bundling;
- Git e versionamento;
- Estrutura de projetos;
- Importação e utilização de projetos existentes.

---

# O que é um Framework Front-end?

Um **Framework Front-end** é um conjunto de ferramentas, bibliotecas e convenções que fornece uma estrutura para o desenvolvimento de interfaces Web.

Seu objetivo é facilitar e organizar o desenvolvimento de aplicações, principalmente projetos maiores e mais complexos.

Comparando com o desenvolvimento utilizando apenas JavaScript:

Vanilla JavaScript
        ↓
Código desenvolvido manualmente
        ↓
Maior possibilidade de repetição
        ↓
Manutenção pode se tornar mais complexa

Com frameworks e bibliotecas:

Framework / Biblioteca
        ↓
Componentes reutilizáveis
        ↓
Organização do código
        ↓
Maior produtividade
        ↓
Manutenção facilitada
Framework x Biblioteca

Durante a aula foi apresentada a diferença entre Framework e Biblioteca.

Framework

Um framework fornece uma estrutura mais definida para o desenvolvimento da aplicação.

Características:

Define uma estrutura de desenvolvimento;
Possui maior controle sobre o fluxo da aplicação;
Utiliza padrões e convenções;
Pode oferecer diversos recursos integrados.

Exemplos:

Angular;
Vue.js.
Biblioteca

Uma biblioteca fornece funcionalidades que podem ser utilizadas pelo desenvolvedor conforme a necessidade.

Características:

Maior liberdade de utilização;
O desenvolvedor decide quando utilizar seus recursos;
Pode ser integrada a diferentes projetos;
Normalmente possui um escopo mais específico.

Exemplo:

React.
Por que utilizar Frameworks Front-end?

Os frameworks oferecem diversos recursos que podem facilitar o desenvolvimento de aplicações.

Entre os principais benefícios estão:

Aumento da produtividade;
Organização do código;
Reutilização de componentes;
Padronização do desenvolvimento;
Facilitação da manutenção;
Recursos para gerenciamento de estado;
Sistema de rotas;
Integração com APIs;
Ferramentas de build;
Comunidade e documentação.
Características dos Frameworks Front-end
Estrutura de Código

Frameworks oferecem estruturas organizadas para facilitar a manutenção e a escalabilidade das aplicações.

Muitos utilizam componentes para permitir a reutilização de partes da interface.

Componentização

A componentização consiste em dividir a aplicação em partes menores e reutilizáveis.

Exemplo:

Aplicação
│
├── Header
├── Menu
├── Card
├── Formulário
└── Footer

Cada componente pode possuir sua própria estrutura, lógica e apresentação.

Programação Reativa

Frameworks como React, Vue e Angular possuem recursos que permitem atualizar a interface de acordo com mudanças no estado da aplicação.

Isso reduz a necessidade de realizar alterações manuais diretamente no DOM.

Ferramentas de Build e Bundling

Frameworks modernos possuem ferramentas responsáveis por preparar o projeto para desenvolvimento e produção.

Essas ferramentas podem realizar tarefas como:

Minificação;
Transpilação;
Organização dos arquivos;
Bundling;
Otimização;
Preparação do projeto para produção.
Sistema de Rotas

Frameworks Front-end podem oferecer recursos para criação de aplicações com diferentes páginas e rotas.

Em aplicações SPA (Single Page Application), a navegação pode ocorrer sem a necessidade de recarregar completamente a página.

Integração com APIs

Frameworks e bibliotecas Front-end facilitam a comunicação com APIs.

Por meio de requisições assíncronas, uma aplicação pode:

Buscar dados;
Enviar informações;
Atualizar dados;
Consumir serviços externos.

Esse conceito será importante para as atividades relacionadas ao consumo de APIs.

React

O React é uma biblioteca JavaScript utilizada para criação de interfaces de usuário.

Foi desenvolvido pelo Facebook e possui uma arquitetura baseada em componentes reutilizáveis.

Entre suas características estão:

Componentização;
JSX;
Hooks;
Gerenciamento de estado;
Virtual DOM;
Reutilização de componentes;
Desenvolvimento de interfaces interativas.
Conceitos Fundamentais do React
JSX

O JSX permite escrever uma estrutura semelhante ao HTML dentro do código JavaScript.

Exemplo:

function App() {
  return (
    <h1>Olá, mundo!</h1>
  );
}

Algumas diferenças em relação ao HTML incluem:

Utilização de {} para expressões JavaScript;
Atributos escritos em camelCase;
Utilização de className em vez de class;
Tags devem ser fechadas corretamente.
Hooks

Os Hooks permitem utilizar recursos do React dentro de componentes funcionais.

useState

O useState é utilizado para gerenciar o estado de um componente.

Exemplo:

const [contador, setContador] = useState(0);
useEffect

O useEffect é utilizado para executar efeitos colaterais, como chamadas de API.

Exemplo:

useEffect(() => {
  // código executado após a renderização
}, []);
Gerenciamento de Estado

O estado representa informações que podem mudar durante a execução da aplicação.

O React possui diferentes possibilidades para gerenciamento de estado.

Entre elas:

useState;
Context API;
Bibliotecas externas, como Redux.

A Context API pode ser utilizada para compartilhar estados entre diferentes componentes.

O Redux pode ser utilizado em aplicações que possuem gerenciamento de estado mais complexo e global.

DOM e Virtual DOM

O DOM (Document Object Model) representa a estrutura de uma página Web em forma de árvore.

O JavaScript pode utilizar o DOM para modificar elementos da página.

O React utiliza o conceito de Virtual DOM para otimizar atualizações da interface.

De maneira simplificada:

Alteração no estado
        ↓
Virtual DOM
        ↓
Comparação das alterações
        ↓
Atualização necessária
        ↓
DOM real

Isso permite que apenas as partes necessárias da interface sejam atualizadas.

Angular

O Angular é um framework completo desenvolvido pelo Google.

Ele oferece diversos recursos integrados para desenvolvimento de aplicações Web, incluindo:

Roteamento;
HTTP Client;
Injeção de dependências;
Componentização;
TypeScript;
CLI;
Change Detection;
Estrutura organizada para aplicações complexas.
Características do Angular

Entre os principais conceitos apresentados estão:

Componentes;
Módulos;
Serviços;
Data Binding;
Injeção de Dependência;
Roteamento;
TypeScript.

Os componentes utilizam uma estrutura que combina HTML, CSS e TypeScript.

Angular CLI

O Angular CLI (Command Line Interface) é uma ferramenta de linha de comando utilizada para criar, configurar e gerenciar projetos Angular.

Instalação
npm install -g @angular/cli
Criação do projeto
ng new meu-app-angular
Entrar na pasta
cd meu-app-angular
Abrir no VS Code
code .
Iniciar o servidor
ng serve
Estrutura de um Projeto Angular

Um projeto Angular possui diversos arquivos e diretórios responsáveis pela organização da aplicação.

Entre eles:

meu-app-angular/
│
├── node_modules/
├── public/
├── src/
├── .angular/
├── .vscode/
├── .gitignore
├── package.json
├── package-lock.json
├── angular.json
├── tsconfig.json
└── README.md
node_modules

Contém as dependências instaladas do projeto.

public

Contém arquivos estáticos acessíveis publicamente.

src

É o diretório principal do código-fonte da aplicação.

.gitignore

Define arquivos e diretórios que não devem ser enviados para o Git.

package.json

Contém informações do projeto, dependências e scripts.

angular.json

Contém configurações importantes do projeto Angular.

Vue.js

O Vue.js é um framework progressivo utilizado para desenvolvimento de interfaces Web.

Uma de suas principais características é permitir uma adoção gradual, podendo ser utilizado desde pequenas partes de uma aplicação até projetos maiores.

Entre suas características estão:

Reatividade;
Componentização;
Single-File Components;
Virtual DOM;
Curva de aprendizado acessível;
Performance otimizada.
Criando um Projeto Vue
Criar o projeto
npm create vue@latest
Entrar na pasta
cd meu-projeto-vue
Instalar as dependências
npm install
Abrir no VS Code
code .
Iniciar o servidor
npm run dev
Estrutura de um Projeto Vue

Uma estrutura básica pode ser representada por:

meu-projeto-vue/
│
├── node_modules/
├── public/
├── src/
├── .vscode/
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

Dentro da pasta src podem ser encontrados arquivos e diretórios como:

src/
│
├── assets/
├── components/
├── App.vue
└── main.js
assets

Armazena recursos como:

Imagens;
Fontes;
CSS;
Outros arquivos processados pelo Vite.
components

Contém componentes reutilizáveis da aplicação.

App.vue

É o componente principal da aplicação.

main.js

É o ponto de entrada responsável por montar a aplicação.

Next.js

O Next.js é um framework baseado em React utilizado para desenvolvimento de aplicações Web modernas e aplicações Full-stack.

Ele adiciona recursos que não fazem parte diretamente do React.

Entre eles:

Roteamento baseado em arquivos;
Renderização no servidor;
Server Components;
Otimização de imagens;
Otimização de fontes;
Páginas e layouts;
Recursos de Back-end;
Otimizações de desempenho;
Recursos relacionados a SEO.
Criando um Projeto Next.js
Criar o projeto
npx create-next-app@latest meu-projeto
Entrar na pasta
cd meu-projeto
Abrir no VS Code
code .
Iniciar o servidor
npm run dev
Estrutura de um Projeto Next.js

Utilizando o App Router, uma estrutura básica pode conter:

meu-projeto/
│
├── node_modules/
├── public/
├── app/
├── package.json
├── package-lock.json
└── README.md
app

É o diretório principal da aplicação quando utilizado o App Router.

Pode conter:

Páginas;
Layouts;
Estilos;
Componentes;
Rotas.

A estrutura de diretórios também pode determinar as rotas da aplicação.

Comparação entre as Tecnologias
Tecnologia	Tipo	Principal característica
React	Biblioteca	Componentização e construção de interfaces
Vue.js	Framework	Reatividade e adoção progressiva
Angular	Framework	Solução completa para aplicações Web
Next.js	Framework	Recursos avançados baseados em React

A escolha da tecnologia depende de fatores como:

Complexidade do projeto;
Experiência da equipe;
Curva de aprendizado;
Performance;
Escalabilidade;
Ecossistema;
Comunidade;
Necessidades da aplicação.
Importando Projetos

Durante a aula também foi apresentada a possibilidade de utilizar projetos existentes como base para novos desenvolvimentos.

A comunidade Open Source disponibiliza diversos projetos que podem ser estudados, adaptados e utilizados como referência.

Entre as ferramentas apresentadas estão:

GitHub;
Vercel Templates;
CodeSandbox.
Git e Versionamento

Os projetos desenvolvidos durante a disciplina devem utilizar Git para controle de versão.

O Git permite registrar as alterações realizadas no projeto ao longo do desenvolvimento.

Comandos básicos:

git init

Inicializa um repositório Git.

git add .

Adiciona os arquivos para o próximo commit.

git commit -m "mensagem"

Registra uma alteração no histórico.

git push

Envia as alterações para o repositório remoto.

git pull

Obtém as alterações existentes no repositório remoto.

Atividade — Projetos com Frameworks Front-end
Descrição

A atividade proposta durante a aula consiste no desenvolvimento de quatro projetos Web sobre o mesmo tema, utilizando diferentes tecnologias:

React;
Vue;
Angular;
Next.js.

Cada projeto deverá apresentar uma página funcional, responsiva e organizada, utilizando componentes e os recursos básicos da tecnologia escolhida.

Além dos quatro projetos, também deverá ser realizada uma quinta entrega, consistindo em uma cópia de um projeto a partir de um repositório existente.

Entregas

A atividade é composta pelas seguintes entregas:

Projeto	Tecnologia
Projeto 01	React
Projeto 02	Vue
Projeto 03	Angular
Projeto 04	Next.js
Projeto 05	Cópia de um projeto existente
Requisitos dos Projetos

Cada aplicação deverá possuir:

Página funcional;
Design organizado;
Interface responsiva;
Utilização de componentes;
Recursos básicos da tecnologia escolhida;
Código versionado com Git;
Repositório no GitHub.

Os projetos deverão ser desenvolvidos utilizando o mesmo tema, permitindo realizar uma comparação prática entre as tecnologias.

Versionamento

Durante o desenvolvimento dos projetos, o Git deverá ser utilizado para registrar a evolução das aplicações.

O histórico de commits permite acompanhar as alterações realizadas ao longo do desenvolvimento.

Fluxo básico:

Desenvolvimento
      ↓
git add
      ↓
git commit
      ↓
GitHub
      ↓
Histórico do projeto
Comparação Final

Após o desenvolvimento dos quatro projetos, deverá ser realizada uma comparação entre:

React;
Vue;
Angular;
Next.js.

A comparação deverá considerar aspectos observados durante o desenvolvimento, como:

Estrutura dos projetos;
Sintaxe;
Componentização;
Facilidade de desenvolvimento;
Organização;
Curva de aprendizado;
Ferramentas disponíveis;
Gerenciamento de estado;
Roteamento;
Performance.
Aprendizados

A Aula 03 permitiu compreender melhor o ecossistema de desenvolvimento Front-end moderno.

Entre os principais conhecimentos adquiridos estão:

Diferença entre framework e biblioteca;
Funcionamento de componentes;
Importância da reutilização de código;
Conceito de programação reativa;
Gerenciamento de estado;
Virtual DOM;
React;
Vue.js;
Angular;
Next.js;
Estrutura de projetos;
Angular CLI;
Vite;
Next CLI;
Git e versionamento;
Utilização de projetos Open Source.
Conclusão

A Aula 03 apresentou os principais conceitos relacionados aos Frameworks Front-end e mostrou como diferentes tecnologias podem ser utilizadas para desenvolver aplicações Web modernas.

Durante a aula foram estudadas quatro tecnologias importantes do ecossistema Front-end: React, Vue.js, Angular e Next.js.

Também foi possível compreender as diferenças entre frameworks e bibliotecas, além de conceitos como componentização, programação reativa, gerenciamento de estado, Virtual DOM, roteamento e integração com APIs.

A atividade prática proposta permite aplicar esses conhecimentos no desenvolvimento de projetos utilizando diferentes tecnologias, mantendo o mesmo tema para possibilitar uma comparação entre as ferramentas.

Além do desenvolvimento, o uso do Git e GitHub permite manter o histórico das alterações e organizar o processo de desenvolvimento dos projetos.

Material desenvolvido para acompanhamento acadêmico individual da disciplina de Frameworks Front-end.
