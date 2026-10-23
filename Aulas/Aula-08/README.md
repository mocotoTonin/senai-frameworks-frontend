# Aula 08 — Projeto React

## Introdução

A Aula 08 da disciplina de **Frameworks Front-end** teve como tema principal o desenvolvimento de aplicações utilizando a biblioteca **React**.

A aula começou com uma revisão de JavaScript, abordando variáveis, tipos de dados, operadores, condicionais, estruturas de repetição, funções, arrays, objetos e manipulação do DOM.

Em seguida, foram estudados os conceitos fundamentais do React: JSX, componentes, props, Virtual DOM, listas e keys e renderização condicional.

Como atividade prática, foi desenvolvida uma aplicação React utilizando todos os conceitos estudados, publicada no GitHub e na Vercel.

---

## Conteúdos da Aula

Durante a aula foram abordados os seguintes conceitos:

* Revisão de JavaScript;
* Variáveis e tipos de dados;
* Operadores, condicionais e estruturas de repetição;
* Funções e arrow functions;
* Arrays e objetos;
* DOM (Document Object Model);
* JSX;
* Componentes;
* Props;
* Virtual DOM e reconciliação;
* Listas e Keys;
* Renderização condicional;
* Git, GitHub e deploy na Vercel.

---

# Revisão de JavaScript

O JavaScript é a linguagem responsável pelos comportamentos dinâmicos das páginas Web. Ele pode ser inserido diretamente no HTML com a tag `<script>` ou em arquivos externos, prática recomendada em projetos maiores.

| Conteúdo | Descrição |
| -------- | --------- |
| Variáveis | `let` possui escopo de bloco, `const` define valores que não serão reatribuídos e `var` possui escopo de função. |
| Tipos de dados | String, Number, Boolean, Undefined, Null, Object, Array, Symbol e BigInt. |
| Operadores | Aritméticos, de comparação (`===`, `!==`), lógicos (`&&`, `\|\|`, `!`) e de atribuição. |
| Condicionais | `if`, `else if`, `else` e operador ternário. |
| Repetição | `for`, `while`, `do...while`, `break` e `continue`. |
| Funções | Funções tradicionais e arrow functions, com parâmetros e `return`. |
| Arrays | Coleções de valores, percorridas com métodos como `forEach()`, `filter()` e `map()`. |
| Objetos | Estruturas com propriedades e métodos, utilizando `this`. |

## DOM

O DOM é a representação em árvore da estrutura de uma página Web, permitindo que o JavaScript consulte e modifique seus elementos.

Entre os principais recursos estão `getElementById()`, `querySelector()`, `querySelectorAll()`, `textContent`, `value`, `classList`, `createElement()`, `appendChild()` e `addEventListener()`.

---

# React

## JSX

O JSX é uma extensão de sintaxe para JavaScript que permite escrever estruturas semelhantes ao HTML dentro do JavaScript, sendo utilizado para descrever as interfaces dos componentes React.

Expressões JavaScript podem ser inseridas entre chaves `{ }`.

```jsx
const nome = "João";
const saudacao = <h1>Olá, {nome}!</h1>;
```

Principais diferenças entre JSX e HTML:

* Utiliza `className` em vez de `class`;
* Utiliza `htmlFor` em vez de `for`;
* Elementos sem conteúdo devem ser fechados, como `<img />`;
* Componentes devem retornar um elemento raiz ou utilizar Fragment;
* Valores JavaScript são inseridos entre chaves.

## Componentes

Componentes são unidades independentes e reutilizáveis da interface. Em React, normalmente são funções JavaScript, com nome iniciado em letra maiúscula, que retornam elementos JSX.

```jsx
function Cabecalho() {
  return <h1>Catálogo React</h1>;
}

function App() {
  return (
    <main>
      <Cabecalho />
    </main>
  );
}
```

Uma aplicação pode ser representada como uma **árvore de componentes**, em que o componente principal contém componentes filhos.

## Props

Props (properties) são dados recebidos por um componente. Elas permitem enviar informações do componente pai para o filho e reutilizar um mesmo componente com conteúdos diferentes.

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

<Saudacao nome="João" />
<Saudacao nome="Maria" />
```

Props podem receber strings, números, booleanos, arrays, objetos, funções e elementos React.

## DOM e Virtual DOM

| DOM | Virtual DOM |
| --- | ----------- |
| Representa a estrutura do documento no navegador. | Representação da interface em memória utilizada pelo React. |
| Pode ser consultado e modificado por JavaScript. | Permite ao React coordenar a atualização da interface. |
| Reflete o documento renderizado. | O desenvolvedor descreve o resultado esperado, e o React aplica as mudanças. |

O processo de atualização da interface ocorre em quatro etapas:

1. **Mudança:** ocorre uma interação ou atualização de dados;
2. **Renderização:** o React executa novamente os componentes para calcular a nova interface;
3. **Reconciliação:** o React compara a nova descrição com a anterior;
4. **Atualização:** somente as alterações necessárias são aplicadas ao DOM.

## Listas e Keys

O método `map()` transforma cada item de um array em um elemento da interface. A propriedade `key` identifica cada elemento da lista, ajudando o React a reconhecer itens mantidos, adicionados, removidos ou reordenados.

```jsx
{alunos.map((aluno) => (
  <li key={aluno.id}>{aluno.nome}</li>
))}
```

Listas também podem ser combinadas com `filter()`, gerando novos arrays em vez de modificar o array existente.

## Renderização Condicional

A renderização condicional permite mostrar, ocultar ou alterar partes da interface conforme uma condição.

* `if` e `return` — quando cada condição exige uma interface diferente;
* Operador ternário — `condicao ? valorSeVerdadeiro : valorSeFalso`, útil para carregamento e resultado;
* Operador `&&` — exibe um elemento apenas quando a condição é verdadeira.

```jsx
function ResultadoBusca({ carregando }) {
  return carregando ? <p>Buscando...</p> : <p>Busca finalizada.</p>;
}
```

---

# Atividade — Projeto React

## Descrição

A atividade consistiu no desenvolvimento de uma aplicação React utilizando todos os conceitos estudados na aula: JSX, componentes, props, Virtual DOM, listas e renderização condicional.

Também foi solicitada a criação de um repositório público no GitHub com um README contendo a descrição, as funcionalidades e os conceitos utilizados.

Foi desenvolvido o **React Lab — Catálogo de Frameworks**, uma aplicação que apresenta as tecnologias estudadas na disciplina, com pesquisa, filtros, favoritos e um contador de horas de estudo.

## Funcionalidades

* Apresentação dos seis conceitos de React estudados;
* Catálogo de frameworks renderizado a partir de um array de dados;
* Pesquisa de frameworks pelo nome;
* Filtro por categoria;
* Marcação de favoritos com contador no cabeçalho;
* Mensagem de carregamento e mensagem de lista vazia;
* Contador de horas de estudo com barra de progresso e meta semanal;
* Layout responsivo.

## Conceitos aplicados

| Conceito | Aplicação no projeto |
| -------- | -------------------- |
| JSX | Estrutura de todos os componentes, com expressões entre chaves, `className` e `htmlFor`. |
| Componentes | `Cabecalho`, `ConceitosJSX`, `BarraDePesquisa`, `ListaFrameworks`, `CardFramework`, `ContadorEstudos` e `Rodape`. |
| Props | O `App` envia dados e funções para os filhos, e o `CardFramework` é reutilizado para cada framework. |
| Virtual DOM | Alterações de estado nos favoritos, pesquisa e contador atualizam apenas as partes modificadas. |
| Listas e Keys | Conceitos, filtros e cards gerados com `map()` e `key` única; pesquisa com `filter()`. |
| Renderização condicional | `if/return` na lista vazia, ternário no carregamento e na meta, `&&` no selo "Estudado em aula". |

## Árvore de componentes

```
App
├── Cabecalho
├── ConceitosJSX
├── BarraDePesquisa
├── ListaFrameworks
│   └── CardFramework
├── ContadorEstudos
└── Rodape
```

## Tecnologias utilizadas

* React 18;
* Vite;
* JavaScript;
* CSS3;
* Google Fonts — Poppins;
* Git;
* GitHub;
* Vercel.

## Identidade visual

Foi mantida a identidade visual das atividades anteriores, com tema escuro e detalhes em azul.

| Elemento        | Definição |
| --------------- | --------- |
| Cor de fundo    | `#212121` |
| Cor de destaque | `#007ACC` |
| Fonte           | Poppins   |

## Repositório da Atividade

O código-fonte da atividade está disponível no GitHub:

**Projeto React**

https://github.com/mocotoTonin/atividade03-react

## Acesse a Aplicação

https://atividade03-react.vercel.app/

---

# Repositórios Complementares

Durante a aula, foram disponibilizados os seguintes materiais para consulta:

## Revisão de JavaScript

https://github.com/deivisontakatu/aula-javascript

## Conceitos de React

https://github.com/deivisontakatu/aula-react

## Exemplo de Projeto React

https://github.com/deivisontakatu/projeto-react

---

# Tecnologias e Ferramentas

| Tecnologia | Utilização                                   |
| ---------- | -------------------------------------------- |
| React      | Construção da interface por componentes.     |
| Vite       | Criação, execução e build do projeto.        |
| JavaScript | Lógica da aplicação.                         |
| CSS3       | Estilização da interface.                    |
| Poppins    | Tipografia do projeto.                       |
| Git        | Versionamento do código.                     |
| GitHub     | Armazenamento e publicação do repositório.   |
| Vercel     | Deploy da aplicação.                         |

---

# Aprendizados

A Aula 08 permitiu revisar os fundamentos do JavaScript e compreender os principais conceitos do React.

Entre os principais conhecimentos desenvolvidos estão:

* Revisão de variáveis, operadores, funções, arrays e objetos;
* Manipulação do DOM com JavaScript;
* Escrita de interfaces com JSX;
* Divisão da interface em componentes reutilizáveis;
* Passagem de dados entre componentes com props;
* Funcionamento do Virtual DOM e da reconciliação;
* Renderização de listas com `map()` e `key`;
* Filtragem de dados com `filter()`;
* Renderização condicional com `if`, ternário e `&&`;
* Publicação de aplicações na Vercel.

---

# Conclusão

A Aula 08 apresentou os conceitos fundamentais para o desenvolvimento de interfaces com React, partindo de uma revisão de JavaScript até a construção de componentes reutilizáveis.

A atividade prática permitiu aplicar todos os conceitos em uma única aplicação, organizando a interface em componentes, transmitindo dados por props, renderizando listas com keys e controlando a exibição dos elementos com renderização condicional.

Dessa forma, a aula contribuiu para a compreensão de como bibliotecas modernas facilitam a criação e a manutenção de interfaces Web.

---

# Links

## Atividade — Projeto React

Repositório:

https://github.com/mocotoTonin/atividade03-react

Aplicação:

https://atividade03-react.vercel.app/

## Repositório do Professor

https://github.com/deivisontakatu/aula-frameworks-frontend

## Repositório Principal da Disciplina

https://github.com/mocotoTonin/senai-frameworks-frontend
