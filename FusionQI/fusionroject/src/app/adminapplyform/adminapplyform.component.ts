import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Applyform } from '../applyform';
import { ApplyformService } from '../form.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CandidateregService } from '../candidatereg.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adminapplyform',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './adminapplyform.component.html',
  styleUrl: './adminapplyform.component.css'
})
export class AdminapplyformComponent {
  registerForm: FormGroup;
  submitted :any;
  applyform: Applyform = new Applyform();
  firstName: any;
  
   constructor(
     private formBuilder: FormBuilder,
     private candidateregService: CandidateregService,
     private http: HttpClient
   ) {
     this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      batchNo: ['', Validators.required],
      lastName:['', Validators.required],
       userName: ['', Validators.required],
       password: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       course: [[], Validators.required],
       phoneNumber:['', Validators.required],
       gender:['', Validators.required],
       dateOfJoining:['', Validators.required]
     });
   }
 onSubmit(){
  this.submitted=false;
  console.log(this.registerForm)
  this.http.post("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/candidate/add",this.registerForm.value).subscribe(res=>{
    alert("Submitted succfully")
    console.log(res)
    // Assuming course is a variable holding the course name
  })
  if (this.registerForm.value.course === 'java fullstack') {
    this.http.post('http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/saveJavaEmployee',this.registerForm.value).subscribe(res=>{
      alert("Submitted succfully")
      console.log(res)
    })
  } else if (this.registerForm.value.course === 'mulesoft') {
    this.http.post('http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/postmulesoft',this.registerForm.value).subscribe(res=>{
      alert("Submitted succfully")
      console.log(res)
    })
  } else if (this.registerForm.value.course === 'python') {
    this.http.post('http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/savePythonEmployee',this.registerForm.value).subscribe(res=>{
      alert("Submitted succfully")
      console.log(res)  
    })
  } else {
    console.log('Course not recognized');
  }
 
  this.registerForm.reset();
  this.submitted = true;
 }

}
