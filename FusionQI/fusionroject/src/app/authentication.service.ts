import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  private loggedIn = false;
  private username = ''; 
  
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient,private router:Router) { }
// here the setloggedin is used to toggle the login to logout ,dashbord 
  setLoggedIn(value: boolean) {

    this.isLoggedIn = value;
  }

}
