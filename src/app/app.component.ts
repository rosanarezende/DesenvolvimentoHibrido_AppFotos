import { Component } from '@angular/core';

import { Platform, LoadingController, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  private loading: any;

  public appPages = [
    {
      title: 'Meus dados',
      url: '',
      icon: 'contact'
    },
    {
      title: 'Configurações',
      url: 'cadastro',
      icon: 'cog'
    }
  ]


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loadingController: LoadingController,
    private navController: NavController,
    private authService: AuthService,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // doLogout(){
  //   this.loadingController.create({
  //     message: 'Saindo ...',
  //     duration: 3000
  //   }).then((res) => {
  //     res.present();
  //     res.onDidDismiss().then((dis) => {
  //       //Acessamos a aplicação
  //       this.navController.navigateBack("");
  //     })
  //   });
  // }

  // vou trocar esse logout simples por um com tempo e mensagem de saída
  // sair(){
  //   this.authService.logout();
  // }

  async doLogout(){
    await this.presentLoading();
    try {
      await this.authService.logout();
    } catch (error) {
      console.log(error);
      this.presentToast(error);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Saindo ..."
    })
    return this.loading.present();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
