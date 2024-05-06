import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { ServiceHomeService } from '../service-home.service';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ServiceHomeService } from '../service-home.service';

import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  thankYouVisible: boolean = false;
  formDisabled: boolean = false;


  constructor(private apiHit: ServiceHomeService ,private route: Router ) {}

  integerRegex = /^\d+$/;
  emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  registerForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailRegex),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern(this.integerRegex),
    ]),
    applying_for: new FormControl('', [Validators.required]),
  });

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name);
  }

  registerFoo() {
    if (this.registerForm.valid) {
      this.formDisabled = true; 
      this.apiHit.postData(this.registerForm.value).subscribe((response: any) => {
        console.log("Response from API:", response);
        alert("Data sent!");
        this.registerForm.reset();
        this.formDisabled = false; 
        this.thankYouVisible = true; 
      });
    }
    
  }
  
java(){
  this.route.navigate(['/javafullstack'])
}
python(){
  this.route.navigate(['/python'])
}
mulesoft(){
  this.route.navigate(['/mulecourrse'])
}
startnow(){
  this.route.navigate(['/applyform'])
}
  
}
