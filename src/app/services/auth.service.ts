import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  // cadastro(usuario:User){
  //     return this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.password) // essa função retorna uma promisse, e preciso tratar isso
  // }

  register(user: User){
    return this.afa.auth.createUserWithEmailAndPassword(user.email, 
      user.password);
  }

  login(user: User){
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.afa.auth.signOut();
  }

  getAuth(){
    return this.afa.auth;
  }

}
