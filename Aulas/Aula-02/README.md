# Aula 02 — Configuração do Ambiente de Desenvolvimento

## Introdução

A Aula 02 da disciplina de **Frameworks Front-end** teve como foco a configuração do ambiente de desenvolvimento e a apresentação de ferramentas utilizadas durante o desenvolvimento de aplicações modernas.

Durante a aula foram abordados conceitos relacionados a **versionamento, Git, GitHub, IDE, Visual Studio Code, Node.js, NPM, criação de projetos React, deploy e hospedagem com Vercel**.

A aula também apresentou uma atividade prática envolvendo o desenvolvimento, versionamento e publicação de uma aplicação React.

---

## Conteúdos da Aula

Durante a aula foram abordados os seguintes temas:

- Introdução ao versionamento;
- Versionamento x Backup;
- Versionamento Semântico (SemVer);
- Git e controle de versão;
- Tags e branches;
- Boas práticas no Git;
- IDE e Visual Studio Code;
- Node.js;
- NPM (Node Package Manager);
- Criação de projetos React;
- Estrutura de um projeto React;
- Deploy;
- Hospedagem com Vercel;
- Atividade prática.

---

## Versionamento

O versionamento é utilizado para registrar e acompanhar as alterações realizadas em um projeto.

Diferentemente de um simples backup, o versionamento mantém um histórico das mudanças, permitindo identificar o que foi alterado, quando a alteração aconteceu e, em determinados contextos, quem realizou a alteração.

Entre os benefícios apresentados estão:

- Controle das mudanças;
- Colaboração entre desenvolvedores;
- Histórico do projeto;
- Recuperação de versões anteriores;
- Redução de retrabalho;
- Rastreabilidade das alterações.

---

## Versionamento Semântico — SemVer

Também foi apresentado o conceito de **Versionamento Semântico (SemVer)**, utilizado para identificar versões de softwares.

O padrão utilizado é:

MAJOR.MINOR.PATCH

Exemplo:

2.1.3
MAJOR

Representa mudanças incompatíveis com versões anteriores.

2.0.0
MINOR

Representa a inclusão de novas funcionalidades que mantêm a compatibilidade com versões anteriores.

1.1.0
PATCH

Representa correções de erros ou bugs sem alteração da compatibilidade.

1.0.1
Git

O Git é um sistema de controle de versão utilizado para registrar alterações em arquivos e projetos.

Durante a aula foram apresentados conceitos e comandos relacionados ao Git, além da utilização do GitHub para sincronização dos projetos.

Alguns comandos utilizados durante o desenvolvimento foram:

git init

Inicializa um repositório Git.

git add .

Adiciona os arquivos para serem incluídos no próximo commit.

git commit -m "mensagem"

Registra as alterações no histórico do projeto.

git push

Envia os commits para o repositório remoto.

Tags e Branches

As tags são utilizadas para identificar pontos específicos do histórico do projeto, como versões estáveis.

Exemplo:

v1.0.0
v1.1.0
v2.0.0

As branches permitem desenvolver novas funcionalidades ou correções sem alterar diretamente a versão principal do projeto.

Boas Práticas com Git

Entre as boas práticas apresentadas na aula estão:

Realizar commits pequenos e frequentes;
Utilizar mensagens de commit claras;
Utilizar branches para novas funcionalidades e correções;
Manter a branch principal estável;
Realizar testes antes de integrar alterações.
Visual Studio Code

O Visual Studio Code (VS Code) foi apresentado como o ambiente utilizado para desenvolvimento.

O VS Code é um editor de código que, por meio de extensões e ferramentas integradas, oferece diversos recursos comuns a um ambiente de desenvolvimento integrado (IDE).

No projeto da atividade, o VS Code foi utilizado para criar, editar, executar e organizar a aplicação React.

Node.js e NPM

O Node.js é um ambiente de execução JavaScript que permite executar código fora do navegador.

Durante a configuração do ambiente, o Node.js foi utilizado como base para trabalhar com ferramentas e projetos JavaScript.

O NPM (Node Package Manager) é o gerenciador de pacotes do Node.js. Ele permite instalar e gerenciar bibliotecas e dependências utilizadas nos projetos.

Um dos principais arquivos relacionados ao NPM é o:

package.json

Ele contém informações do projeto, scripts e dependências utilizadas pela aplicação.

Para instalar as dependências de um projeto, pode ser utilizado:

npm install
Atividade 01 — Aplicação React
Descrição

A primeira atividade prática da aula consistiu no desenvolvimento de uma aplicação utilizando React e o Visual Studio Code como ambiente de desenvolvimento.

Após o desenvolvimento da aplicação, foi utilizado o Git para realizar o versionamento do projeto e o GitHub para armazenar o código-fonte.

Por fim, o projeto foi conectado à Vercel, permitindo realizar o deploy e disponibilizar a aplicação por meio de uma URL pública.

Aplicação Desenvolvida

Para a atividade foi desenvolvida uma aplicação de Lista de Tarefas.

A aplicação permite ao usuário adicionar e remover tarefas, além de visualizar a quantidade de tarefas cadastradas.

Funcionalidades
Adicionar tarefas;
Remover tarefas;
Contabilizar tarefas cadastradas;
Adicionar tarefas utilizando a tecla Enter;
Exibir uma mensagem quando não existem tarefas;
Interface responsiva;
Publicação da aplicação na Vercel.
React

A aplicação utiliza React para construção da interface e gerenciamento dos estados.

Um dos principais recursos utilizados foi o useState:

const [tarefa, setTarefa] = useState("");
const [tarefas, setTarefas] = useState([]);

O estado tarefa controla o conteúdo digitado pelo usuário, enquanto tarefas armazena a lista de tarefas adicionadas.

Também foi utilizada a renderização dinâmica de listas por meio do método map().

tarefas.map((item, index) => (
  <li key={item.id}>
    {item.texto}
  </li>
))

Para remover tarefas, foi utilizado o método filter():

setTarefas(
  tarefas.filter((item) => item.id !== id)
);
Tecnologias Utilizadas na Atividade
React;
JavaScript;
HTML;
CSS;
Vite;
Visual Studio Code;
Git;
GitHub;
Vercel.
Versionamento da Atividade

Após o desenvolvimento da aplicação, o projeto foi versionado utilizando Git.

O projeto foi conectado a um repositório remoto no GitHub e suas alterações foram enviadas utilizando push.

O repositório contém o código-fonte completo da aplicação.

Repositório da Atividade

O código-fonte da aplicação React está disponível no GitHub:

GitHub:

https://github.com/mocotoTonin/atividade-react

Deploy e Hospedagem

Após a publicação do código no GitHub, o projeto foi conectado à Vercel.

A Vercel realizou o processo de deploy da aplicação e disponibilizou o projeto por meio de uma URL pública.

A integração com o GitHub também permite que alterações enviadas ao repositório possam gerar novos deploys automaticamente.

Aplicação Online

A aplicação desenvolvida na atividade pode ser acessada através do endereço:

Vercel:

https://atividade-react-seven.vercel.app/

Fluxo de Desenvolvimento

O desenvolvimento da atividade seguiu o seguinte fluxo:

Visual Studio Code
        ↓
Desenvolvimento com React
        ↓
Testes da aplicação
        ↓
Git
        ↓
Commit
        ↓
GitHub
        ↓
Integração com Vercel
        ↓
Deploy
        ↓
Aplicação disponível online
Deploy e Vercel

A aula também apresentou o conceito de deploy, que consiste no processo de colocar uma aplicação em produção, tornando-a acessível aos usuários finais.

A Vercel foi apresentada como uma plataforma voltada para hospedagem e deploy de aplicações modernas, com integração com serviços de controle de versão como o GitHub.

No projeto desenvolvido, a Vercel foi utilizada para publicar a aplicação React na internet.

Resultado

Ao final da atividade, foi desenvolvida uma aplicação React funcional, versionada com Git, publicada no GitHub e disponibilizada online utilizando a Vercel.

Links do Projeto

Repositório GitHub:

https://github.com/mocotoTonin/atividade-react

Aplicação publicada na Vercel:

https://atividade-react-seven.vercel.app/

Conclusão

A Aula 02 possibilitou colocar em prática conceitos fundamentais para o desenvolvimento de aplicações Front-end.

A atividade permitiu aplicar conhecimentos de React, JavaScript, Git, GitHub e Vercel, passando por todas as etapas desde o desenvolvimento local até a publicação da aplicação na internet.

O exercício também demonstrou a importância do versionamento e da integração entre ferramentas de desenvolvimento, controle de código e plataformas de deploy.
