# Arquitetura Flux

Usada pelo Facebook junto a biblioteca javascript react.

![Arquitetura Flux](../../recursos/PNG/Arquitetura%20Flux.png)

Uma atualização de dados segue um único caminho:

- **View**: Renderização e interações com o usuário.
- **Actions**: Ação que dispara os dados para o Dispacher.
- **Dispacher**: Recebe os dados e envia para os Stores registrados. 
- **Store**: Recebem as actions com os dados e emitem os eventos (Responsáveis por atualizar os dados do state).

---

> "Desvende os segredos da arquitetura Flux e liberte o potencial das suas aplicações. Domine os fundamentos para gerenciar o fluxo de dados de forma eficiente, construindo sistemas web robustos e reativos."



