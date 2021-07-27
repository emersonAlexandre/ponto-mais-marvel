# ponto-mais-marvel

![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)
![Typescript Logo](https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg)

## Sumário
- [Sumário](#sumário)
- [Introdução](#introdução)
- [Configurações | Build | Deploy](#configurações--build--deploy)
  - [Pre Requisitos](#pre-requisitos)
  - [Clone repositório](#clone-repositório)
  - [Desenvolvimento local](#desenvolvimento-local)
  - [Iniciar a aplicação local](#iniciar-a-aplicação-local)
  - [Deploy](#deploy)
  - [Iniciar a aplicação em produção](#iniciar-a-aplicação-em-produção)
  - [Parar a aplicação em produção](#parar-a-aplicação-em-produção)

## Introdução

Este projeto tem como objetivo fornecer Front-End para visualizacão de alguns personagens da marvel e algumas de suas informações.
- Visualização de personagens;
- Visualizacão de detalhes de um personagem.


## Configurações | Build | Deploy

### Pre Requisitos

- [NodeJS LTS](https://nodejs.org/en/)
- [Angular](https://angular.io/guide/setup-local)

### Clone repositório

```bash
$ git clone https://github.com/emersonAlexandre/ponto-mais-marvel.git
```

### Desenvolvimento local

Após clonar o repositório, executar os seguinte comando na pasta raiz do projeto:

```bash
$ npm install # instalar dependencias do projeto
```

### Iniciar a aplicação local
Executar o seguinte comando na pasta raiz do projeto:

```bash
$ ng serve # iniciar aplicacao local (porta 4200)
```

### Deploy

Links das ferramentas:

- [Docker](https://www.docker.com/get-started)
- [Docker-compose](https://docs.docker.com/compose/)

### Iniciar a aplicação em produção
Executar o seguinte comando na pasta raiz do projeto:

```bash
$ docker-compose up # iniciar aplicacao (porta 80)
```
### Parar a aplicação em produção
Abra o terminal onde iniciou a aplicação e segure as teclas (Ctrl+c) ou execute o seguinte comando na pasta raiz do projeto:

```bash
$ docker-compose down # parar aplicacao
```
