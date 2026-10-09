# Projeto: Finance Dashboard

**Cargo responsável:** Desenvolvedor Front-end  
**Nível:** Projeto pessoal intermediário  
**Tecnologias obrigatórias:** HTML5, CSS3 e TypeScript  
**Frameworks:** Nenhum  
**Persistência:** `localStorage`  
**Responsividade:** Obrigatória  
**Acessibilidade:** Obrigatória

---

## 1. Objetivo do sistema

Desenvolver um sistema de gerenciamento financeiro pessoal que permita ao usuário acompanhar receitas e despesas, visualizar o saldo e analisar movimentações.

A aplicação deverá funcionar inteiramente no navegador, sem Back-end ou banco de dados. Os dados serão persistidos utilizando `localStorage`, para continuarem disponíveis quando o usuário fechar e abrir a página novamente.

O projeto deverá demonstrar domínio de:

- HTML semântico;
- CSS;
- JavaScript e TypeScript;
- Manipulação do DOM;
- Eventos;
- Tipagem com TypeScript;
- Formulários e validação;
- `localStorage`;
- Arrays e objetos;
- Funções;
- Filtros;
- Responsividade;
- Acessibilidade;
- Organização de código.

## 2. Estrutura geral

A aplicação será dividida em uma barra lateral, um cabeçalho e uma área principal cujo conteúdo muda conforme a seção selecionada.

### Barra lateral

- Dashboard
- Entradas
- Saídas
- Relatórios

### Cabeçalho

- Nome ou logotipo do sistema;
- Notificações (elemento visual opcional);
- Perfil do usuário.

### Área principal

Exibirá o conteúdo correspondente à seção selecionada na barra lateral.

## 3. Dashboard

A tela principal deverá apresentar um resumo financeiro com três cards.

### Saldo atual

Exemplo: `R$ 4.250,00`

Cálculo: **total de entradas − total de saídas**.

### Total de entradas

Exemplo: `R$ 5.000,00`

Deverá somar todas as transações do tipo `income`.

### Total de saídas

Exemplo: `R$ 750,00`

Deverá somar todas as transações do tipo `expense`.

Os valores devem ser calculados a partir das transações armazenadas, e não digitados manualmente no HTML.

## 4. Gráfico

O Dashboard deverá conter uma representação visual das movimentações financeiras.

**Restrição:** não utilizar bibliotecas de gráficos. Criar uma representação simples utilizando HTML, CSS e TypeScript, por exemplo, barras que comparem entradas e saídas por mês.

O objetivo é transformar dados em uma visualização dinâmica por meio do DOM.

## 5. Últimas transações

O Dashboard deverá mostrar as cinco transações mais recentes, com:

- Descrição;
- Categoria;
- Data;
- Valor;
- Ações de editar e excluir.

Deverá existir uma opção **Ver todas** para abrir a lista completa de transações na seção apropriada.

## 6. Tela de Entradas

Ao selecionar **Entradas**, o sistema deverá mostrar apenas as receitas.

A tela deverá incluir:

- Total de entradas;
- Botão **Nova entrada**;
- Lista de transações;
- Pesquisa e filtros;
- Ações para editar e excluir.

## 7. Adicionar entrada

Ao clicar em **Nova entrada**, exibir um formulário com os seguintes campos:

- **Descrição:** por exemplo, Salário;
- **Valor:** por exemplo, R$ 3.000,00;
- **Categoria:** Trabalho, Investimentos, Vendas ou Outros;
- **Data:** campo do tipo `date`.

Botão: **Adicionar entrada**.

Após o envio, o sistema deverá:

1. Validar os dados;
2. Criar a transação;
3. Adicioná-la à lista;
4. Atualizar o `localStorage`;
5. Atualizar os valores do Dashboard;
6. Limpar ou fechar o formulário;
7. Informar ao usuário que a operação foi concluída.

## 8. Tela de Saídas

Ao selecionar **Saídas**, o sistema deverá mostrar apenas as despesas.

A tela deverá incluir:

- Total de saídas;
- Botão **Nova saída**;
- Lista de transações;
- Pesquisa e filtros;
- Ações para editar e excluir.

## 9. Adicionar saída

O formulário deverá conter:

- **Descrição:** por exemplo, Mercado;
- **Valor:** por exemplo, R$ 350,00;
- **Categoria:** Alimentação, Transporte, Moradia, Lazer, Saúde, Educação, Serviços ou Outros;
- **Data:** campo do tipo `date`.

Botão: **Adicionar saída**.

Depois de adicionar uma saída, a lista, o saldo, os totais, os relatórios e o armazenamento deverão ser atualizados.

## 10. Editar transação

Cada transação deverá ter uma ação **Editar**.

Ao acioná-la, o formulário deverá abrir preenchido com os dados atuais. O usuário poderá alterar a descrição, o valor, a categoria e a data.

Ao salvar as alterações, o sistema deverá atualizar a transação, a interface e o `localStorage`, recalculando os totais.

## 11. Excluir transação

Cada transação deverá ter uma ação **Excluir**.

A exclusão não deverá ocorrer imediatamente. Antes, exibir uma confirmação que identifique a transação, por exemplo:

> Tem certeza de que deseja excluir “Mercado — R$ 350,00”?

Disponibilizar as ações **Cancelar** e **Excluir**.

Após a confirmação, remover a transação, atualizar o armazenamento e recalcular os valores exibidos.

## 12. Filtros e pesquisa

A tela de transações deverá oferecer:

### Filtro por categoria

Permitir selecionar uma categoria específica ou visualizar todas.

### Filtro por período

Oferecer campos de data inicial e final.

### Pesquisa

Um campo de pesquisa deverá filtrar transações pela descrição.

Os filtros deverão funcionar em conjunto e não deverão alterar ou excluir os dados originais armazenados.

## 13. Relatórios

Criar uma tela simples para análise das movimentações por período.

Deverá mostrar:

- Total de entradas;
- Total de saídas;
- Saldo do período;
- Despesas agrupadas por categoria.

As despesas por categoria poderão ser representadas por barras horizontais feitas com CSS. Os dados deverão ser calculados a partir das transações existentes.

## 14. Modelo de dados

Criar uma estrutura TypeScript para representar uma transação. Exemplo inicial:

```ts
interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
}
```

Entenda a função de cada propriedade e adapte o modelo quando necessário.

Implemente funções com responsabilidades claras, como:

- `addTransaction()`
- `editTransaction()`
- `deleteTransaction()`
- `getTransactions()`
- `filterTransactions()`
- `calculateBalance()`
- `calculateIncome()`
- `calculateExpenses()`
- `saveTransactions()`
- `loadTransactions()`

Os nomes podem ser diferentes. O importante é manter cada responsabilidade bem definida e evitar duplicação desnecessária.

## 15. Persistência com localStorage

### Ao adicionar ou alterar uma transação

1. Criar ou atualizar o objeto;
2. Atualizar a coleção de transações;
3. Salvar os dados no `localStorage`;
4. Atualizar a interface.

### Ao carregar a página

1. Ler os dados do `localStorage`;
2. Verificar se os dados existem e se podem ser interpretados;
3. Recuperar as transações;
4. Calcular os valores;
5. Renderizar o Dashboard e as listas.

Considere o caso em que não há dados salvos ou em que o conteúdo armazenado está inválido. O sistema deverá continuar funcionando de forma segura.

## 16. Validações

Os formulários não deverão aceitar dados inválidos.

- Descrição obrigatória;
- Valor numérico válido e maior que zero;
- Categoria selecionada;
- Data válida;
- Mensagens de erro claras e próximas dos campos correspondentes.

Exemplos:

- “Informe uma descrição.”
- “Informe um valor válido.”
- “O valor deve ser maior que zero.”
- “Selecione uma categoria.”

Não dependa apenas da validação nativa do navegador: implemente as verificações necessárias no TypeScript também.

## 17. Responsividade

O sistema deverá funcionar em desktop, tablet e celular.

### Desktop

Sidebar visível ao lado da área principal.

### Tablet

A sidebar poderá ser reduzida para ocupar menos espaço.

### Celular

O layout deverá se adaptar a uma tela estreita. A navegação poderá usar um menu recolhível, e os cards deverão ser organizados em uma coluna ou grade adequada.

Tabelas e listas não poderão provocar rolagem horizontal indesejada em toda a página.

## 18. Acessibilidade

A acessibilidade é obrigatória.

- Utilizar HTML semântico;
- Associar cada campo ao seu `label`;
- Usar elementos `button` para ações;
- Permitir navegação por teclado;
- Manter um indicador de foco visível;
- Garantir contraste adequado;
- Exibir mensagens de erro compreensíveis;
- Utilizar atributos ARIA somente quando necessários;
- Não depender apenas de cores para distinguir receitas e despesas.

Por exemplo, além da cor, representar os valores com sinais: `+ R$ 3.000,00` e `− R$ 500,00`.

Se utilizar modais, garantir que sejam acessíveis por teclado, que o foco seja gerenciado adequadamente e que o usuário consiga fechá-los.

## 19. Organização do projeto

Uma estrutura possível:

```text
finance-dashboard/
├── index.html
├── src/
│   ├── ts/
│   │   ├── main.ts
│   │   ├── types.ts
│   │   ├── storage.ts
│   │   ├── transactions.ts
│   │   ├── calculations.ts
│   │   ├── filters.ts
│   │   └── ui.ts
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── responsive.css
│   └── assets/
├── package.json
├── tsconfig.json
└── README.md
```

A estrutura é uma sugestão. Você pode adaptá-la conforme as necessidades do projeto, mantendo o código organizado e fácil de entender.

## 20. Requisitos técnicos

### HTML

- HTML5 semântico;
- Formulários acessíveis;
- Estrutura clara.

### CSS

- Flexbox;
- Grid;
- Responsividade;
- Variáveis CSS;
- Estados `hover` e `focus`;
- Transições usadas com moderação;
- Layout visual consistente.

### TypeScript

- Interfaces e tipos;
- Funções;
- Arrays e objetos;
- Manipulação do DOM;
- Eventos;
- `localStorage`;
- Validação;
- Manipulação de dados;
- Renderização dinâmica.

### Não utilizar

- React;
- Vue;
- Angular;
- Bootstrap;
- Tailwind CSS;
- Bibliotecas prontas de componentes;
- Bibliotecas de gráficos.

O objetivo é desenvolver a aplicação com HTML, CSS e TypeScript, sem depender de frameworks de interface.

## 21. Critérios de qualidade

O projeto não será considerado concluído apenas porque a página funciona.

### Funcionalidade

O usuário deve conseguir criar, visualizar, editar, excluir, filtrar e persistir transações.

### Código

O TypeScript deverá estar organizado, tipado e separado em módulos com responsabilidades claras.

### Interface

A aplicação deverá parecer um produto real, com hierarquia visual, espaçamento consistente, estados de interação e boa apresentação em diferentes telas.

### Experiência do usuário

O usuário deverá entender:

- Em qual seção está;
- Quais ações pode realizar;
- Se uma ação foi concluída;
- O que precisa corrigir quando ocorre um erro;
- Como cancelar uma operação antes de confirmar uma exclusão.

## 22. Entrega no GitHub

O README deverá conter:

- Nome e descrição do projeto;
- Funcionalidades;
- Tecnologias utilizadas;
- Instruções para executar localmente;
- Capturas de tela;
- Link para a versão publicada;
- Principais decisões técnicas ou desafios encontrados.

Publique o código no GitHub e disponibilize uma versão de demonstração.

---

## 23. Plano de desenvolvimento por sprints

### Sprint 1 — Estrutura

- Criar o projeto;
- Configurar TypeScript;
- Criar HTML semântico;
- Montar a sidebar e o header;
- Definir a estrutura do Dashboard.

### Sprint 2 — Interface

- Criar os cards;
- Criar listas ou tabelas;
- Criar formulários;
- Criar modal de confirmação;
- Implementar responsividade;
- Definir estados visuais.

### Sprint 3 — TypeScript e dados

- Definir o tipo `Transaction`;
- Implementar armazenamento;
- Implementar operações de CRUD;
- Renderizar transações dinamicamente.

### Sprint 4 — Funcionalidades

- Implementar entradas e saídas;
- Implementar edição e exclusão;
- Implementar filtros e pesquisa;
- Implementar cálculos.

### Sprint 5 — Dashboard e relatórios

- Calcular saldo, entradas e saídas;
- Mostrar as últimas transações;
- Criar gráficos em CSS;
- Implementar relatórios por categoria e período.

### Sprint 6 — Qualidade

- Revisar validações;
- Testar acessibilidade;
- Testar responsividade;
- Tratar erros;
- Refatorar o código;
- Testar dados vazios e dados inválidos no armazenamento.

### Sprint 7 — Entrega

- Escrever o README;
- Capturar telas;
- Publicar no GitHub;
- Fazer o deploy;
- Realizar uma revisão final.

## Orientação final

Não copie um tutorial completo de “Finance Dashboard HTML CSS TypeScript”. Consulte a documentação quando precisar, mas tome suas próprias decisões sobre arquitetura, comportamento e interface.

O objetivo é construir uma aplicação que você consiga explicar em uma entrevista: por que organizou o código dessa forma, como os dados são armazenados, como os cálculos funcionam e como a interface é atualizada.

Esse projeto deverá complementar seu Hexatombe: um demonstra experiência com React e desenvolvimento Full Stack; o Finance Dashboard demonstrará domínio dos fundamentos da Web e TypeScript sem framework.
