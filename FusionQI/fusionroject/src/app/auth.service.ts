import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: any;

  constructor() { }
  isLogged(){
    // return true;
    if(window.localStorage.getItem('token')){
      this.username = window.localStorage.getItem('token');
      return false
    }else{
      return true
    }
  }
  // isnotlogged(){
  //   window.localStorage.removeItem('token')
  // }
}
