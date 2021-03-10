import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Authuser } from 'src/app/model/authuser';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService : AuthService,
    private httpService : HttpService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {  
    
    console.log('Guard called');
    let url = `http://localhost:3000/auth`;
    return this.httpService.get<Authuser>(url).pipe(
      map((res : Authuser) => {
        if(res.isValid){
          return true;
        } else {
          return false;
        }
      })
    );
  }
  
}
