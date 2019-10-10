import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  title: String;

  // userCadastro: User = {}
  public userRegister: User = {}; // lembre-se inicializar o User, colocando vazio
  private loading: any;


  constructor(
    private authService: AuthService,
    private router: Router,
    public loadingController: LoadingController,
    private navController: NavController,
    public toastController: ToastController
  ) {
    this.title = "CADASTRO"
  }


  ngOnInit() {
  }

  criarUsuario() {
    console.log("Criando usuário")
  }


  // realizarCadastro(user:User){
  // console.log(this.userCadastro);
  //   this.authService.cadastro(this.userCadastro).then(user => {
  //     if(user){
  //       console.log(user);
  //     }
  //   }).catch(error => {
  //     console.log(error); // me perdi nesse final


  // essa é uma maneira mais fácil de escrever
  // async realizarCadastro(user: User){
  //   console.log(this.userCadastro);
  //   try{
  //     let user = await this.authService.cadastro(this.userCadastro);
  //     if(user){
  //       this.router.navigate(["tabs"]);
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // }



  // nova função

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Cadastrando ..."
    })
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    })
    toast.present();
  }

  async realizarCadastro() {
    await this.presentLoading();
    try {
      console.log(this.userRegister);
      await this.authService.register(this.userRegister);
    } catch (error) {
      let message: string;
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = "Email já cadastrado!";
          break;
        case 'auth/invalid-email':
          message = "Email inválido!";
          break;
        case 'auth/weak-password':
          message = "A senha deve ter pelo menos 6 caracteres";
          break;
        default:
          message = "Ocorreu um erro no cadastro!";
          break;
      }
      console.log(error);
      this.presentToast(message);
    } finally {
      this.loading.dismiss();
    }
  }

}
