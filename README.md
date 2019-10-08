# Desenvolvimento Híbrido - AppFotos
Curso de Desenvolvimento Híbrido com Ionic - prof. Otávio Lube dos Santos - Wize Company


## Objetivo
Desenvolver um aplicativo que captura fotos, que podem ser visualizadas (com descrição) na galeria e no mapa.
O app, portanto, permitirá:
- tirar fotos com a funcionalidade de geoposicionamento acoplada;
- inserir comentários nas fotos;
- visualizar as fotos tiradas e os comentários nelas inseridas.


## Requisitos

Foram realizadas instalações pré-projeto.

* **Node.js**

	[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Para conferir as versões do Node.js e do npm (o gerenciador de pacotes):
  ```
    node --version
    npm --version
  ```

* **Angular**

  ```
    npm install -g @angular/cli
  ```

Para conferir:

  ```
    ng v
  ```

* **Ionic**

  ```
    npm install -g ionic
  ```

* **Android Studio**

	[https://developer.android.com/studio](https://developer.android.com/studio)

* **Visual Studio Code**

	[https://code.visualstudio.com/download](https://code.visualstudio.com/download)


## Criação do app

Utilizar o modelo tabs com framework Angular.

  ```
    ionic start AppFotos tabs --type=angular
  ```

Navegar até a pasta do projeto `AppFotos` e 'run':

- Para abrir o Visual Studio Code:

  ```
    code .
  ```

- Para rodar o app:

  ```
    ionic serve
  ```


## Tabs

Foram geradas 3 tabs automaticamente com o projeto, as quais usamos como (alterações feitas em `tabs.page.html`):
* Câmera
* Galeria
* Mapa

Em `app.component.html` criar o menu:
* Meus dados
* Configurações
* Logout


## Pages

### Login

  ```
    ionic g page login
  ```

É a página inicial da aplicação, por isso foi necessário mudar rotas:

- Em `app.routing.module.ts` fazer alterações no path:
	- o vazio, alterar por "tabs"
	- o "login", deixar vazio

- Na pasta `tabs`, em `tabs.router.module.ts` alterar o path do "tabs", deixando vazio.



### Cadastro

  ```
    ionic g page cadastro
  ```
  
OBS: há botão de _voltar_ na página, que remete ao login

