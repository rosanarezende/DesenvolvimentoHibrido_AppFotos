# Desenvolvimento Híbrido - AppFotos
Curso de Desenvolvimento Híbrido com Ionic - prof. Otávio Lube dos Santos - Wize Company


## OBJETIVO
Desenvolver um aplicativo que captura fotos, que podem ser visualizadas (com descrição) na galeria e no mapa.
O app, portanto, permitirá:
- tirar fotos com a funcionalidade de geoposicionamento acoplada;
- inserir comentários nas fotos;
- visualizar as fotos tiradas e os comentários nelas inseridas.


## REQUISITOS

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


## CRIAÇÃO DO APP

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


## TABS

Foram geradas 3 tabs automaticamente com o projeto, as quais usamos como (alterações feitas em `tabs.page.html`):
* Câmera
* Galeria
* Mapa

Em `app.component.html` criar o menu:
* Meus dados
* Configurações
* Logout


## PAGES

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


## INTEGRAÇÃO COM FIREBASE

Criação de projeto web em: 

  [https://firebase.google.com/](https://firebase.google.com/) 

Utilizar a variável _firebaseConfig_ (com adaptações) no projeto, em `environments.ts`.

E instalar o pacote _angular fire_ no projeto, run:

    ```
    npm install firebase @angular/fire --save
    ```

OBS: caso apresente algum erro, run:

    ```
    npm cache clean --force
    ```

### Autenticação (authentication)

Na página do Firebase, em _Authentication_, entrar em _Método de login_ e ativar o provedor _Email/senha_.

**Importações**

Já tendo feito o download do pacote _angular fire_, fazer os imports no projeto, no arquivo `app.module.ts`

  ```
  //meus imports
	import { environment } from "../environments/environment";
	import { AngularFireModule } from "@angular/fire";
	import { AngularFireAuthModule } from "@angular/fire/auth";
  ```
E dentro no _@NgModule_, em _imports_:

  ```
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule
  ```

O módulo _AngularFireModule_ fará a conexão entre o projeto do Ionic com o Firebase, e o _AngularFireAuthModule_ nos permitirá usar as funções de autenticação do Firebase.

**Criação do serviço de autenticação**

Criar serviço de autenticação _auth_ na pasta _services_

  ```
  ionic g service services/auth
  ```

Em `auth.service.ts`, importar módulo _AngularFireAuth_

  ```
  import { AngularFireAuth } from '@angular/fire/auth';
  ```

E no _constructor_ fazer a conexão:

  ```
  constructor(private afa: AngularFireAuth) { }
  ```

 Criar métodos úteis para autenticação, no caso:
- cadastro()
- login()
- logout()
- getAuth()

**Criação da interface**

Criar interface _user_ na pasta _interfaces_

  ```
  ionic g interface interfaces/user
  ```

Em `user.ts` criar strings _email_ e _password_, com sinal de ? para que sejam opcionais


**Implementação no CADASTRO**

Em `auth.service.ts`, no método _cadastro()_, fazer a ligação com as variáveis usadas no `user.ts`

  ```
  import { User } from '../interfaces/user';
  cadastro(usuario:User){
	  return this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.password) // função assíncrona, retorna uma promisse
  }
  ```

Em `cadastro.page.html`:
- Colocar _bildings_ nos inputs de _Email_ e _Senha_:
  - [(ngModel)]="userCadastro.email"
  - [(ngModel)]="userCadastro.password"
- No botão de _Criar conta de usuário_ fazer o link com a função _realizarCadastro()_, que criaremos a seguir:
  - (click)="realizarCadastro()

Em `cadastro.page.ts` criar a função assíncrona realizarCadastro()
- será necessário fazer importações e algumas alterações adicionais para que a função funcione

  ```
  import { User } from '../interfaces/user';
  import { AuthService } from '../services/auth.service';
  import { Router } from '@angular/router';

  constructor(
    private authService: AuthService,
    private router: Router 
    ) {}
  
  userCadastro: User = {}

  async realizarCadastro(user: User){ 
    console.log(this.userCadastro);
    try{
      let user = await this.authService.cadastro(this.userCadastro);
      if(user){
        this.router.navigate(["tabs"]);
      }
    }catch(error){
      console.log(error);
    }
  }
  ```

### Banco de dados (database)

### Armazenamento (storage)

