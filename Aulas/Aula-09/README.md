# Aula 09 — Projeto React 02

## Introdução

A Aula 09 da disciplina de **Frameworks Front-end** deu continuidade ao desenvolvimento de aplicações com **React**, avançando dos componentes e props para recursos que tornam a aplicação interativa e conectada.

Foram estudados o estado dos componentes com `useState`, os formulários com campos controlados, os efeitos com `useEffect`, o consumo de APIs com `fetch` e a navegação entre páginas com **React Router**.

Como atividade prática, foi desenvolvida uma aplicação React utilizando todos os conceitos estudados, publicada no GitHub e na Vercel.

---

## Conteúdos da Aula

Durante a aula foram abordados os seguintes conceitos:

* State e o Hook `useState`;
* Por que uma variável comum não atualiza a tela;
* Hooks e suas regras;
* Formulários e campos controlados;
* Eventos `onChange` e `onSubmit`;
* `preventDefault()`;
* Efeitos e o Hook `useEffect`;
* Lista de dependências e limpeza de efeitos;
* APIs e requisições com `fetch`;
* Envio de dados com `POST`;
* Tratamento de erros;
* React Router: rotas, `Link` e parâmetros de rota.

---

# State e useState

O **state** é uma informação que o componente guarda, como um contador ou uma mensagem. Quando o estado muda, o React renderiza o componente novamente para atualizar a tela.

## Por que uma variável comum não basta?

* Alterar uma variável comum não faz o React renderizar o componente novamente;
* A cada nova renderização, as variáveis locais são recriadas;
* O state guarda valores entre renderizações e atualiza a interface quando eles mudam.

```jsx
function Contador() {
  let valor = 0;
  function incrementar() {
    valor = valor + 1; // muda a variável, mas a tela não é atualizada
  }
  return <button onClick={incrementar}>Valor: {valor}</button>;
}
```

## Hooks

Hooks são funções especiais que permitem usar recursos do React em componentes funcionais. Seus nomes começam com `use`, como `useState` e `useEffect`, e devem ser chamados no início do componente.

## useState

O `useState` recebe um valor inicial e retorna dois elementos: o **valor atual** e a **função para atualizá-lo**.

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <section>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </section>
  );
}
```

---

# Formulários

Formulários permitem que o usuário informe dados para a aplicação, como em cadastros, buscas, login e preferências. Em React, utilizam campos HTML, eventos e estado.

## Campos controlados

São campos cujo valor é controlado pelo estado do React:

| Elemento | Função |
| -------- | ------ |
| `value` | Define o valor exibido no campo. |
| `onChange` | Detecta quando o usuário digita. |
| `e.target.value` | Obtém o texto digitado. |
| `setNome()` | Atualiza o estado com o novo valor. |

Fluxo: **digitação → evento → atualização do estado → nova renderização**.

```jsx
const [nome, setNome] = useState("");

<input value={nome} onChange={(e) => setNome(e.target.value)} />
```

## Envio e preventDefault()

O `onSubmit` executa uma função quando o formulário é enviado. O `preventDefault()` impede o comportamento padrão do navegador, que recarregaria a página, deixando o React controlar o que acontece após o envio.

```jsx
function enviar(e) {
  e.preventDefault(); // Evita recarregar a página
  alert("Enviado com sucesso!");
}

<form onSubmit={enviar}>
  <button type="submit">Enviar</button>
</form>
```

---

# useEffect

Efeitos permitem executar ações fora da renderização da interface, quando o componente precisa interagir com recursos externos: alterar o título da aba, usar temporizadores ou buscar dados de APIs.

O `useEffect` recebe uma função com o efeito e uma **lista de dependências**, que controla quando ele é executado novamente.

| Dependências | Quando o efeito executa |
| ------------ | ----------------------- |
| `[]` | Apenas na montagem do componente. |
| `[titulo]` | Na montagem e sempre que `titulo` mudar. |
| Sem lista | Após toda renderização. |

```jsx
useEffect(() => {
  document.title = titulo;
}, [titulo]);
```

## Limpeza de um efeito

Alguns efeitos criam recursos que precisam ser liberados, como eventos e temporizadores. A função de limpeza é retornada pelo próprio `useEffect` e executa antes de o efeito rodar novamente e quando o componente deixa de ser utilizado.

```jsx
useEffect(() => {
  window.addEventListener("resize", atualizar);
  return () => {
    window.removeEventListener("resize", atualizar);
  };
}, []);
```

> Tudo o que for configurado e precisar ser encerrado deve ter uma limpeza adequada.

---

# Consumo de APIs

Uma **API** (Application Programming Interface) permite a comunicação entre sistemas. Em React, possibilita buscar e enviar dados para serviços externos.

## Buscando dados com fetch

* `fetch()` realiza requisições HTTP;
* A resposta é assíncrona, por isso usamos `await`;
* `response.ok` identifica erros HTTP;
* `response.json()` interpreta os dados JSON.

```jsx
useEffect(() => {
  async function carregar() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    setPublicacoes(dados);
  }
  carregar();
}, []);
```

O `useEffect` inicia a busca quando o componente é exibido e o `useState` guarda os dados recebidos.

## Enviando dados com POST

```jsx
await fetch("/api/publicacoes", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Aprendendo React" }),
});
```

## Erros e cuidados importantes

* Tratar erros de rede com `try/catch` e verificar o status HTTP;
* Considerar estados de carregamento, lista vazia e serviço indisponível;
* Evitar requisições repetidas causadas por dependências incorretas no `useEffect`;
* Não expor chaves secretas no código do navegador;
* Respeitar autenticação, limites de uso e políticas de CORS.

```jsx
try {
  const resposta = await fetch(url);
  if (!resposta.ok) throw new Error("Erro na consulta");
  const dados = await resposta.json();
} catch (erro) {
  console.error(erro);
}
```

---

# React Router

O **React Router** é uma biblioteca que organiza a navegação em React, associando URLs a componentes e permitindo trocar de página sem recarregar todo o documento.

## Conceitos fundamentais

| Conceito | Descrição |
| -------- | --------- |
| Rota | Regra que associa um caminho a uma interface. |
| URL | Endereço da página atual. |
| Link | Elemento para navegar entre rotas. |
| Parâmetro | Parte variável do caminho, como `:id`. |
| Rota aninhada | Rota organizada dentro de uma estrutura pai. |

## Configurando as rotas

* `BrowserRouter` envolve a aplicação;
* `Routes` agrupa as rotas disponíveis;
* `Route` define o caminho e o componente correspondente.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/sobre" element={<Sobre />} />
  </Routes>
</BrowserRouter>
```

## Navegação com Link

O `Link` navega entre rotas pela propriedade `to`, sem recarregar a página, sendo preferível à tag `<a>` dentro da aplicação.

```jsx
<nav>
  <Link to="/">Início</Link>
  <Link to="/sobre">Sobre</Link>
</nav>
```

## Parâmetros de rota

Parâmetros representam partes variáveis da URL e são úteis em páginas de detalhes. O `useParams()` permite acessar esses valores.

```jsx
// Rota: /conceitos/:id
const { id } = useParams();
return <h1>Conceito: {id}</h1>;
```

---

# Atividade — Projeto React 02

## Descrição

A atividade consistiu no desenvolvimento de uma aplicação React utilizando todos os conceitos estudados na aula: State e `useState`, formulários, `useEffect`, consumo de APIs e React Router.

Também foi solicitada a criação de um repositório público no GitHub com um README contendo a descrição, as funcionalidades e os conceitos utilizados.

Foi desenvolvido o **React Blog**, uma aplicação com várias páginas que busca publicações, autores e comentários na API JSONPlaceholder e permite criar novas publicações por meio de um formulário com validação.

## Funcionalidades

* Navegação entre as páginas Início, Publicações, Nova publicação e Sobre;
* Lista de publicações buscada na API, com pesquisa pelo título e filtro por autor;
* Botão "Carregar mais" para exibir as publicações aos poucos;
* Página de detalhes com parâmetro de rota, autor e comentários;
* Mensagens de carregamento, de lista vazia e de erro com opção de tentar novamente;
* Formulário com validação, prévia em tempo real e envio com `POST`;
* Título da aba atualizado conforme a página;
* Contador de curtidas e relógio em tempo real;
* Página 404 para endereços inexistentes;
* Layout responsivo.

## Conceitos aplicados

| Conceito | Aplicação no projeto |
| -------- | -------------------- |
| State e `useState` | Contador, busca, filtro, dados da API, carregamento, erros e campos do formulário. |
| Formulários | Campos controlados com `value` e `onChange`, `onSubmit`, `preventDefault()` e validação por campo. |
| `useEffect` | Título da aba, relógio com `setInterval`, buscas na API e sincronização com o `localStorage`. |
| Limpeza de efeitos | `clearInterval` no relógio e `AbortController` para cancelar requisições. |
| Consumo de APIs | `fetch`, `response.ok`, `response.json()`, `try/catch` e `POST` com `JSON.stringify()`. |
| React Router | `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useParams`, `useNavigate` e rota `*`. |

## Rotas da aplicação

```
/                  → Início
/publicacoes       → Lista de publicações
/publicacoes/:id   → Detalhes de uma publicação
/nova              → Formulário de nova publicação
/sobre             → Sobre o projeto
*                  → Página não encontrada
```

## Tecnologias utilizadas

* React 18;
* React Router DOM 6;
* Vite;
* JavaScript;
* Fetch API e JSONPlaceholder;
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

**Projeto React 02**

https://github.com/mocotoTonin/projeto-react-aula-9

## Acesse a Aplicação

projeto-react-aula-9.vercel.app

---

# Repositórios Complementares

Durante a aula, foram disponibilizados os seguintes materiais para consulta:

## Conceitos de React

https://github.com/deivisontakatu/aula-react

## Exemplo de Projeto React

https://github.com/deivisontakatu/projeto-react

## Aplicação de Exemplo

https://projeto-react-five-swart.vercel.app/

---

# Tecnologias e Ferramentas

| Tecnologia   | Utilização                                   |
| ------------ | -------------------------------------------- |
| React        | Construção da interface por componentes.     |
| React Router | Rotas e navegação entre páginas.             |
| Vite         | Criação, execução e build do projeto.        |
| JavaScript   | Lógica da aplicação.                         |
| Fetch API    | Requisições para a API.                      |
| CSS3         | Estilização da interface.                    |
| Poppins      | Tipografia do projeto.                       |
| Git          | Versionamento do código.                     |
| GitHub       | Armazenamento e publicação do repositório.   |
| Vercel       | Deploy da aplicação.                         |

---

# Aprendizados

A Aula 09 permitiu compreender como uma aplicação React reage às ações do usuário, se comunica com serviços externos e se organiza em várias páginas.

Entre os principais conhecimentos desenvolvidos estão:

* Diferença entre variáveis comuns e state;
* Uso do `useState` para guardar e atualizar valores;
* Criação de formulários com campos controlados e validação;
* Uso de `preventDefault()` no envio de formulários;
* Uso do `useEffect` e de sua lista de dependências;
* Limpeza de temporizadores, eventos e requisições;
* Busca de dados com `fetch` e envio com `POST`;
* Tratamento de erros e estados de carregamento;
* Configuração de rotas, navegação com `Link` e parâmetros com `useParams`;
* Configuração de rotas de SPA na Vercel.

---

# Conclusão

A Aula 09 apresentou os recursos que transformam componentes estáticos em aplicações interativas: o estado, os formulários, os efeitos, o consumo de APIs e o roteamento.

A atividade prática permitiu aplicar todos esses conceitos em uma única aplicação, que busca dados reais em uma API, trata carregamento e erros, valida e envia formulários e organiza a navegação em várias páginas com URLs próprias.

Dessa forma, a aula consolidou a base necessária para o desenvolvimento de aplicações React completas.

---

# Links

## Atividade — Projeto React 02

Repositório:

https://github.com/mocotoTonin/projeto-react-aula-9

Aplicação:

projeto-react-aula-9.vercel.app

## Repositório do Professor

https://github.com/deivisontakatu/aula-frameworks-frontend

## Repositório Principal da Disciplina

https://github.com/mocotoTonin/senai-frameworks-frontend
