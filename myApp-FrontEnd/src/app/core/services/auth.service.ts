import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Authuser } from '../../model/authuser';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService
  ) { }

  isAuthenticated() {
    let url = `http://localhost:3000/auth`;
    let success: boolean = false;
    this.httpService.get<Authuser>(url).subscribe(async (res:Authuser) => {
      success = res.isValid;
    });
    console.log(success);
  }
}
