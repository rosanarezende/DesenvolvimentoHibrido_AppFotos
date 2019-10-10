import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
// do prof - para login
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
// import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  title: String;

  caminho: String;

  // password: String;

  // do prof - para login
  public userLogin: User = {};
  private loading: any;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private loadingController: LoadingController,
    // do prof - para login
    // para msg
    public toastController: ToastController,
    private authService: AuthService
    // private afr: AngularFireAuth  //podia ter feito assim, mas seria errado...  uma gambiarra


  ) {
    this.title = "LOGIN";
    this.caminho = "/assets/fotos1.jpg";
    // this.password = "";
  }

  ngOnInit() {
  }

  // realizarLogin(){
  //   console.log("Realizando Login")
  // }

  // realizarLoginReal(){
  //   // this.router.navigateByUrl("tabs")

  //   // this.navCtrl.navigateRoot("tabs")


  // Não vou manter isso pq não posso garantir que vai durar 3 segundos, tem q estar sincronizado
  //   this.loadingController.create({
  //     message: "Realizando login...",
  //     duration: 3000
  //   }).then(res => {
  //     // this.afr.auth() // ao invés disso vou criar um serviço
  //     res.present();
  //     res.onDidDismiss().then(dis => {
  //       this.navCtrl.navigateRoot("tabs");
  //     })
  //   })


  // novo código

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Logando ..."
    })
    return this.loading.present(); // retorna a apresentação desse casa
  }
  // lá na minha função vou mandar ele esperar o presente loading, na segunda linha

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  // prof antes fez assim
  //   doLogin(){
  //     this.authService.login(this.userLogin).then(user => {
  //       // this.router.navigate(["tabs"]);
  //   })
  // }

  async doLogin() {
    await this.presentLoading();
    try {
      console.log(this.userLogin);
      await this.authService.login(this.userLogin); // tenta esperar meu autentication service fazer meu login - vc não precisa programar isso na mão, o Ionic faz isso pra vc
    } catch (error) {
      let message: string;
      switch (error.code) {
        case "auth/wrong-password":
          message: "Usuário ou senha incorretos!";
          break;
        case "auth/user-not-found":
          message: "Usuário não encontrado!";
          break;
        default:
          message: "Ocorreu um erro na autenticação!"
          break;
      }
      console.log(error);
      this.presentToast(message);
    } finally { // é executado independente de qq coisa
      this.loading.dismiss();
    }
  }

  realizarCadastro() {
    console.log("Realizando Cadastro")
  }

}
