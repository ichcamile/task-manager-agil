
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
- 🚫 Validação para garantir que o título da tarefa não fique vazio.
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
│   └── uml.drawio
├── .github/
│   └── workflows/
│       └── test.yml
├── README.md
└── .gitignore

````

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

Os testes ficam dentro da pasta `/tests` e validam regras básicas, como o título da tarefa não pode ser vazio. ⚠️

O pipeline do GitHub Actions está configurado para rodar esses testes automaticamente a cada push. 🤖

Você pode ver o status dos testes na aba **Actions** do GitHub. 📊

## 📊 Modelagem UML

Os diagramas de casos de uso e de classes estão disponíveis na pasta `/docs` no arquivo `uml.drawio`. 📐
