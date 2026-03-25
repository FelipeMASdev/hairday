# HairDay

Aplicacao web desenvolvida durante a formacao Fullstack da Rocketseat.
O projeto gerencia agendamentos de corte de cabelo por data e horario, com exibicao por periodos do dia e cancelamento em tempo real.

## Felipe Mendes
Desenvolvedor Full Stack Junior

[![Portfolio](https://img.shields.io/badge/Portfolio-Acessar-111827?style=for-the-badge&logo=google-chrome&logoColor=white)](https://felipemasdev.github.io/Portfolio-Dev/)

**Contato**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/felipe-mendes-a-s-dev/)

[![E-mail](https://img.shields.io/badge/E--mail-Contato-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:felipe.mas.dev@gmail.com)

## Sobre o projeto

O HairDay permite criar, visualizar e cancelar agendamentos de clientes com base na data selecionada. Os horarios disponiveis sao carregados dinamicamente, respeitando conflitos de agenda e bloqueando horarios passados.

## Funcionalidades

- Formulario para agendar atendimento com data, horario e nome do cliente
- Carregamento dinamico dos horarios disponiveis por dia
- Bloqueio de horarios ja ocupados e horarios passados
- Exibicao dos agendamentos separados por periodos: manha, tarde e noite
- Cancelamento de agendamentos com confirmacao
- Atualizacao automatica da lista de agendamentos apos criar ou cancelar

## Tecnologias utilizadas

- JavaScript (ES Modules)
- HTML e CSS
- Day.js
- JSON Server
- Webpack

## Como executar localmente

1. Instale as dependencias:

```bash
npm install
```

2. Em um terminal, inicie a API local:

```bash
npm run server
```

3. Em outro terminal, inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador a URL exibida pelo Webpack Dev Server.

## Aprendizados do projeto

Este projeto consolida pratica em:

- Integracao front-end com API REST simulada
- Instalação e utilização de pacotes com NPM
- Organizacao de codigo em modulos
- Renderizacao dinamica de listas no DOM
- Manipulacao de datas e horarios com Day.js
- Controle de estado de disponibilidade de horarios

