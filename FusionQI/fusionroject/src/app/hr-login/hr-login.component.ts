import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../environment';
import { AuthenticationService } from '../authentication.service';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-hr-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './hr-login.component.html',
  styleUrl: './hr-login.component.css'
})
export class HrLoginComponent {
  username: string ="";
  
  // mail: string = '';
  // password: string = '';
  errorMessage: string = '';
  private subscription: Subscription = new Subscription();
  private apiBaseUrl = environment.apiBaseUrl;
  showPassword: boolean = false;
  showDetails: boolean = false; // New variable for showing details
  data: any;
  password: any;
  mail: any;
  studId: any;
 
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthenticationService, // Inject the AuthenticationService
    private authsService: AuthService
  ) {}


  login() {
    this.username = this.mail;
    this.password = this.password;
    const data ={
      "mail": this.mail,
      "password": this.password
    }
    console.log()
    console.log("hi");
    console.log(this.password);
    this.subscription.add(
      this.http.post(`${this.apiBaseUrl}/login/log`,data ).subscribe({
       
          next: (response:any) => {
            console.log(response)
            if(response.department === "management"){
              alert("Logged as Admin")
              this.authService.setLoggedIn(true);
              window.localStorage.setItem("token",response['firstName'])
              window.localStorage.setItem("dep",response['department'])
              window.localStorage.setItem("id",response['id'])
              this.router.navigate(['/adminholder']);

            }else if(response.department === null){
              alert("Logged as USer");
              this.authService.setLoggedIn(true);
              window.localStorage.setItem("token",response['firstName'])
              window.localStorage.setItem("dep",response['department'])
              window.localStorage.setItem("id",response['id'])
              this.router.navigate(['/home']);
            } else{
              this.errorMessage = '';
              alert("logged as Candidate");
              this.authService.setLoggedIn(true);
              window.localStorage.setItem("token",response['firstName'])
              window.localStorage.setItem("dep",response['department'])
              window.localStorage.setItem("id",response['id'])
              console.log(response.id)
              this.studId= response.id
              this.router.navigate(['/studentholder']);
            }
            
             
          },
          error: (error: HttpErrorResponse) => {
              if (error instanceof HttpErrorResponse && error.status === 200) {
                  console.error('HTML Response:', error.error);
              } else {
                  this.errorMessage = 'Invalid username or password. Please try again.';
                  console.error('Login failed:', error);
              }
          }
      })
  );
}

    



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToHrRegister(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/register']);
  }
  togglePasswordVisibility(){

  }
  hidePasswordDetails(){

  }
  showPasswordDetails(){
    
  }

}
