# React

- Biblioteca Front End JavaScript de código aberto com foco em criação de interfaces em páginas web;
- Facilitar a conexão entre diferentes partes de uma página.

**Funcionamento e características:**

- O React funciona atráves de componentes;
- Em uma aplicação web, componentes são o que compõem uma página, sendo que cada componente é manipulado de maneira individual;
- Reaproveitamento de código;
- Eficiente;
- Reeativo;
- Escalável.

## Componentes

- São os pilares do React;
- Implementa as Propriedades (props) e Estados (states).

### **Props:**

- São objetos com informações de vários tipos:

1. Funções;
1. Número;
1. String.

- São passados do componente pai pro filho;

![Hierarquia componentes do React](../../recursos/PNG/React%20component%20hierarchy.png)

- Imutáveis.

### **States:**

- Objetos/Variável;
- São criados dentro do componente, por isso não podem ser passados para o componente, dessa maneira, ficam ativos enquanto o componente estiver em uso;
- Mutáveis.

![Hierarquia componentes do React](../../recursos/PNG/React%20funcionamento.png)

### **Virtual DOM:**

- DOM significa Document Object Model, que em tradução livre seria Modelo de Documento por Objetos, mas simplificando, é uma maneira de estruturar o HTML em formato de “árvore”, com vários galhos, onde cada nó é um elemento.
- Virtual DOM, são duas cópias da DOM real, a “atualizada” e a “inicial”. Ele cria essas cópias pra poder controlar a árvore, controlando quando a DOM real realmente precisa de atualização ou não.
- A Virtual DOM “inicial” é a primeira a receber a mudança em si, logo depois é comparada com a “atualizada” e, constatando que realmente teve uma mudança, ela engatilha o que chamamos de “mudança de estado” (falaremos disso mais pra frente), e por final, atualiza o elemento na DOM real, olha como é simples:

![GIF Virtual DOM](../../recursos/PNG/React%20virtual%20dom.gif)

---

**Material Complementar:**

- [React Introdução PDF](../../recursos/PDF/RI.pdf)
- [Como eu gostaria que tivesse sido minha primeira aula de React](https://www.tabnews.com.br/doretto/conteudo-como-eu-gostaria-que-tivesse-sido-minha-primeira-aula-de-react)

> "Desbrave o universo da reatividade e transforme suas ideias em interfaces extraordinárias com o React."
