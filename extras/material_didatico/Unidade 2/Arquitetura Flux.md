# Arquitetura Flux

Usada pelo Facebook junto a biblioteca javascript react.

![Arquitetura Flux](../../recursos/PNG/Arquitetura%20Flux.png)

Uma atualização de dados segue um único caminho:

- **View**: As views são os componentes de interface do usuário que observam as mudanças de estado das stores e se atualizam automaticamente. Elas também podem disparar novas ações com base nas interações do usuário.
- **Actions**: Representa uma intenção de mudança no estado da aplicação, como resultado de uma interação do usuário ou outro evento. As ações são simples objetos que contêm um tipo e quaisquer dados adicionais necessários para descrever a mudança.
- **Dispacher**: O despachante é responsável por enviar as ações para as stores. Ele é o centro da arquitetura Flux, garantindo que todas as stores recebam as ações de maneira coordenada.
- **Store**: As stores contêm o estado da aplicação e a lógica para manipular as ações recebidas. Elas respondem a uma ação e determinam como o estado deve ser atualizado. Diferente do padrão MVC, no Flux, o store não notifica diretamente as views, mas emite um evento de mudança.

---

> "Desvende os segredos da arquitetura Flux e liberte o potencial das suas aplicações. Domine os fundamentos para gerenciar o fluxo de dados de forma eficiente, construindo sistemas web robustos e reativos."



