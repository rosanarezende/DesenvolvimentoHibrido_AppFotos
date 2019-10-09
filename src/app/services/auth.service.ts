import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  cadastro(usuario:User){
      return this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.password) // essa função retorna uma promisse, e preciso tratar isso
  }

  login(){

  }

  logout(){

  }

  getauth(){

  }

}
