import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  title: String;

  constructor() {
    this.title = "CADASTRO"
   }

  ngOnInit() {
  }

  criarUsuario(){
    console.log("Criando usuário")
  }

}
