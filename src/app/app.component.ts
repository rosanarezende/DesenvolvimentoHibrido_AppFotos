import { Component } from '@angular/core';

import { Platform, LoadingController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loadingController: LoadingController,
    private navController: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  doLogout(){
    this.loadingController.create({
      message: 'Saindo ...',
      duration: 3000
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        //Acessamos a aplicação
        this.navController.navigateBack("");
      })
    });
  }


}
