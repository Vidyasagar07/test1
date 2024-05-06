import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../contact';
import { CommonModule } from '@angular/common'; // Add this import

@Component({
  selector: 'app-contactinfo',
  standalone: true,
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css'],
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule] // Include CommonModule in the imports array
})
export class ContactinfoComponent implements OnInit {

  submitted = false;
  registerForm!: FormGroup;
  contact: Contact = {
    firstName: '',
    lastName: '',
    id: 0,
    email: '',
    message: '',
    category: '',
  };
 
  constructor(
    private httpclient: HttpClient,
    private formBuilder: FormBuilder
  ) {}
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(25)]],
      category: ['', Validators.required],
    });
  }
 
  convertToJsonToXWwwFormUrlencoded(jsonData: any): string {
    return Object.keys(jsonData)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(jsonData[key]))
      .join('&');
  }
 
  submitForm(): void {
    this.submitted = true;
 
    if (this.registerForm.invalid) {
      return;
    }
    alert("Form Submitted Successfully")
 
    const formData = this.registerForm.value;
    const formDataXWwwFormUrlencoded = this.convertToJsonToXWwwFormUrlencoded(formData);
   
    this.httpclient.post("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/contact/add", formDataXWwwFormUrlencoded, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe(res => {
      
      console.log(res);
    });
    this.registerForm.reset();
    this.submitted = false;
  }
}
