# SPA - Single Page Aplication

Aplicação de Página única:

- Não necessariamente a aplicação deve conter somente uma página.
- O diferencial está em como acontece a transição entre as páginas da aplicação

![Exemplo de uma SPA](../../recursos/PNG/Exemplo%20de%20uma%20SGA.png)

Na imagem, a "div2" está oculta inicialmente, e ao clicar no botão, a "div1" que está em destaque é ocultada, enquanto a anteriormente oculta é colocada em destaque.

É um processo de aceleração na atualização da página, pois não é necessário renderizar a página novamente a cada clique.

No SPA, há um único marcador de página, que consiste essencialmente em uma URL única, permitindo o acesso à página por meio de uma única URL.

### Tratamento de rota com React:

O React não apresenta um recurso nativo para tratamento de rota, por tanto existe uma biblioteca popular para roteamento em Single Page Applications (SPAs) feitas com React. Ele permite que você mapeie diferentes URLs para diferentes componentes React, permitindo assim a navegação entre diferentes "páginas" dentro da sua aplicação sem recarregar a página.

Aqui está um resumo do funcionamento básico do React Router:

Instalação: Primeiro, você precisa instalar o React Router na sua aplicação. Você pode fazer isso usando npm:

> npm install react-router-dom

- BrowserRouter: Componente responsável por informar a aplicação que existe um roteamento de componentes dados pelo Router.
- Route: Componente que associa uma determinada rota a um componente.
- Parâmetros: component, path, exact.
1. Component: Recebe o component a ser exibido ao acessar uma rota.
1. Path: Caminho da URL que precisa ser acessado e é definido no componente 
1. Exact: Define que a rota deve ser exatamente como está definido entre ` " ` em path.
1. Link: Componente utilizado para acessar as páginas do próprio projeto.
1. Outlet: Renderizar a página quando seleciona um link, dentro de uma div, contâiner.

---

**Materiais adicionais:**

- [Código de Exemplo - React Rotas](https://replit.com/@SinaideBezerra/Reactrotas#src/App.jsx)

- [Código Exemplo - React Navegação com Hook](https://replit.com/@SinaideBezerra/Reactnavegacaocomhook)




