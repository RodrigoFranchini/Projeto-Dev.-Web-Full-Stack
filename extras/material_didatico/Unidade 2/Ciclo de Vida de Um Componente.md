# Ciclo de Vida de Um Componente 


![Ciclo de Vida de Um Componente](../../recursos/PNG/Ciclo%20de%20Vida%20de%20Um%20Componente.png
)

### Fases:

- **Inicialização**: Fase inicial de um componente React. Criado em uma classe e o construtor o inicializa. 

![Inicialização](../../recursos/PNG/Inicialização.png)

- **Montagem**: Fase em que a instância do componente já está criada e é inserida no DOM, renderizando em uma página Web.

Lembre-se de um método comumente utilizado nessa fase:

- `componentDidMount()`: Chamado após o componente ser inserido no DOM.

![Montagem](../../recursos/PNG/Montagem.png)

- **Atualização**: É responsável por lidar com a interação com o usuário

Lembre-se de um método comumente utilizado nessa fase:

- `componentDidUpdate()` Chamado imediatamente após a atualização.

![Atualização](../../recursos/PNG/Atualização.png)

- **Desmontagem**: Fase em que o componente é removido do DOM.

Lembre-se de um método comumente utilizado nessa fase:

- `componentWillUnmount()`: Chamado imediatamente antes do componente ser removido do DOM.

![Desmontagem](../../recursos/PNG/Desmontagem.png)

Observação: Alguns métodos citados nas imagens deixaram de ser válidos nas versões mais recentes do React.

 ---

> "Explore o ciclo de vida dos componentes React e eleve suas aplicações a um novo patamar de eficiência e performance." 


 




