import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
constructor (
  private authService: AuthService,
  private router: Router
  ) {}

canActivate():Promise<boolean>{ // em alguns casos precisamos especificar o tipo da função
  return new Promise(resolve => {
    this.authService.getAuth().onAuthStateChanged(user => {
      if(!user) this.router.navigate([''])
      resolve(user ? true : false);
    })
  })
}

}