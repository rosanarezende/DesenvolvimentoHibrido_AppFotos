import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title: String;

  constructor(
    private router: Router, 
    private navCtrl: NavController,
    private loadingController: LoadingController
    ) {
      this.title = "LOGIN"
    }

  ngOnInit() {
  }

  realizarLogin(){
    console.log("Realizando Login")
  }

  realizarLoginReal(){
    // this.router.navigateByUrl("tabs")
    
    // this.navCtrl.navigateRoot("tabs")
    
    this.loadingController.create({
      message: "Realizando login...",
      duration: 3000
    }).then(res => {
      res.present();
      res.onDidDismiss().then(dis => {
        this.navCtrl.navigateRoot("tabs");
      })
    })

  }

  realizarCadastro(){
    console.log("Realizando Cadastro")
  }

}
