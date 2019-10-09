import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  title: String;

  constructor(
    private authService: AuthService,
    private router: Router 
    ) {
    this.title = "CADASTRO"
   }

  
  ngOnInit() {
  }

  criarUsuario(){
    console.log("Criando usuário")
  }

  userCadastro: User = {}

  // realizarCadastro(user:User){
        // console.log(this.userCadastro);
  //   this.authService.cadastro(this.userCadastro).then(user => {
  //     if(user){
  //       console.log(user);
  //     }
  //   }).catch(error => {
  //     console.log(error); // me perdi nesse final

  // essa é uma maneira mais fácil de escrever
  async realizarCadastro(user: User){
    console.log(this.userCadastro);
    try{
      let user = await this.authService.cadastro(this.userCadastro);
      if(user){
        this.router.navigate(["tabs"]); // me perdi - tem q chamar um private
      }
    }catch(error){
      console.log(error);
    }
  }


}
