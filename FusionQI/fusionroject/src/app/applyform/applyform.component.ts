import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ApplyformService } from '../applyform.service';
import { Applyform } from '../applyform';
import { error } from 'console';
import { BrowserModule } from '@angular/platform-browser';
import { ApplyformService } from '../form.service';

@Component({
  selector: 'app-applyform',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule ],
  templateUrl: './applyform.component.html',
  styleUrl: './applyform.component.css'
})
export class ApplyformComponent implements OnInit{
  

 
 
    registerForm!:FormGroup;
  

    submitted = false;
  
   // employee: Employee = new Employee();
   zone: any;

   // private employeeService : EmployeeService,
       applyform: Applyform = new Applyform();

   constructor(private applyformService:ApplyformService,
     private formBuilder : FormBuilder,
     private router: Router, ){

   }
   ngOnInit(){  
     //validations
     this.registerForm = this.formBuilder.group({
      first_name:  ['', [Validators.required, Validators.minLength(4)]],
      last_name: ['', Validators.required],
      applying_for: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]], 
     });
         // Subscribe to form changes to keep the 'employee' object in sync
   // this.registerForm.valueChanges.subscribe((formValues) => {
   //   this.employee = { ...this.employee, ...formValues };
   // });


   }



   

  
     // console.log(this.employee);
     // this.submitted = true;
  
     // if (this.registerForm.invalid) {
     //   return;
     // }
  
     // this.saveEmployee();

  
   saveForm() {
    this.applyform = this.registerForm.value;

      this.applyformService.createForm(this.applyform).subscribe(data=>{
        console.log(data);
        
        this.registerForm.get('first_name')?.setValue("");
        this.registerForm.get('last_name')?.setValue("");
        this.registerForm.get('email')?.setValue("");
        this.registerForm.get('phone')?.setValue("");
        this.registerForm.get('dropdownControl')?.setValue("selectedValue");
      },
      error=>console.log(error));

    }



     // this.employeeService.createEmployee(this.employee).subscribe(
     //   (data: any) => {
     //     console.log(data);
     //     alert("Applied Successfully");
     //     const employeeData = data as Employee; // Type assertion to Employee
     //     this.navigateToProfile(employeeData);
     //   },
     //   (error) => {
     //     console.error('Error during employee creation:', error);
     //     if (error instanceof HttpErrorResponse) {
     //       console.error('Status:', error.status);
     //       console.error('Error details:', error.error);
     //     }
     //   }
     // );
 
  
  
   navigateToProfile(): void {
     // if (employee && employee.id) {
     //   this.router.navigate(['/profile', employee.id]);
     // }
   }
   onSubmit(){
    console.log(this.applyform)
    console.log(this.registerForm.get('first_name')?.value);
     this.submitted = true;
  
     if (this.registerForm.invalid) {
       return;
     }
    this.saveForm();
    alert("Submited")
    this.registerForm.reset();
    this.submitted = false;
   }
  
   updateEmployee() {
   }
 }


export { Applyform };

