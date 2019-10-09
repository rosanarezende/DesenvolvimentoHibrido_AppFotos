import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
// import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title: String;

  caminho: String;

  password: String;

  constructor(
    private router: Router, 
    private navCtrl: NavController,
    private loadingController: LoadingController,
    // private afr: AngularFireAuth  //podia ter feito assim, mas seria errado...  uma gambiarra
    ) {
      this.title = "LOGIN";
      this.caminho = "/assets/fotos1.jpg";
      this.password = "";
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
      // this.afr.auth() // ao invés disso vou criar um serviço
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
