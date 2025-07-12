
# 🛠️ Gerenciador de Tarefas Ágil 🚀

## 📋 Descrição do Projeto

Este projeto é um sistema simples de gerenciamento de tarefas inspirado em metodologias ágeis, especialmente Kanban. O objetivo é permitir criar, editar, mover entre etapas e excluir tarefas, facilitando o acompanhamento do fluxo de trabalho em tempo real. ⚡️

## 🎯 Objetivos

- ✅ Criar um sistema básico de CRUD para tarefas.
- 🗂️ Organizar as tarefas visualmente em colunas: **A Fazer**, **Em Progresso** e **Concluído**.
- 🧩 Aplicar conceitos de Engenharia de Software ágil.
- 🧪 Implementar testes automatizados para validação básica.
- 🤖 Configurar integração contínua usando GitHub Actions.
- 📚 Documentar o projeto com UML e justificativas técnicas.

## ⚙️ Tecnologias Utilizadas

- 🌐 HTML5
- 🎨 CSS3
- 💻 JavaScript (Vanilla)
- 🛠️ GitHub Actions (CI/CD)
- 📐 Draw.io (para diagramas UML)


## 🛠️ Funcionalidades

- ✏️ Adicionar novas tarefas com título obrigatório e descrição opcional.
- 📝 Editar título e descrição das tarefas.
- 🔄 Mover tarefas entre as colunas (status):  
  - 🕓 A Fazer  
  - 🏗️ Em Progresso  
  - ✅ Concluído
- 🗑️ Excluir tarefas com confirmação.
- 💾 Persistência local usando `localStorage`.
- 🚫 Validação para garantir que o título da tarefa não fique vazio ou contenha caracteres inválidos.
- ✔️ Testes unitários simples para validação do título da tarefa.
- ⚙️ Pipeline de testes automático rodando no GitHub Actions.


## 📁 Estrutura do Projeto

```

task-manager-agil/
├── src/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── tests/
│   └── validation.test.js
├── docs/
│   ├── uml.drawio
│   └── uml-use-case.png
├── .github/
│   └── workflows/
│       └── test.yml
├── README.md
└── .gitignore

````


## 🗂️ Quadro Kanban no GitHub

O quadro Kanban do projeto está disponível em:  
🔗 [https://github.com/users/ichcamile/projects/3/views/1](https://github.com/users/ichcamile/projects/3/views/1)


## 🚀 Como Executar Localmente

1. Clone o repositório:

```bash
git clone git@github.com:ichcamile/task-manager-agil.git
````

2. Navegue até a pasta `src`:

```bash
cd task-manager-agil/src
```

3. Abra o arquivo `index.html` no navegador. 🖥️


## ✅ Testes Automatizados

Os testes ficam dentro da pasta `/tests` e validam regras básicas, como o título da tarefa não pode ser vazio ou conter caracteres inválidos. ⚠️

O pipeline do GitHub Actions está configurado para rodar esses testes automaticamente a cada push. 🤖

Você pode ver o status dos testes na aba **Actions** do GitHub. 📊


## 📊 Modelagem UML

Os diagramas de **casos de uso** e **classes** estão disponíveis na pasta `/docs`, criados com o Draw\.io.

## 🔄 Mudança no Escopo do Projeto

Durante o desenvolvimento, foi feita uma modificação importante no escopo original:

* ⚙️ **Inclusão da persistência local usando `localStorage`**

### Justificativa

Essa mudança foi necessária para garantir que as tarefas criadas pelo usuário fossem salvas no navegador e não fossem perdidas ao atualizar ou fechar a página, melhorando significativamente a experiência e confiabilidade do sistema.

### Impactos da mudança

* Criação de funcionalidades para salvar, carregar e sincronizar tarefas no `localStorage` 💾
* Ajustes na interface para refletir o estado persistente das tarefas 🖥️
* Atualização dos testes para cobrir essa nova funcionalidade 🧪
* Pequeno aumento no prazo e complexidade do projeto, porém com grande benefício para a usabilidade e realismo do sistema 🚀
