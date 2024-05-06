import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentdetailform',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './studentdetailform.component.html',
  styleUrl: './studentdetailform.component.css'
})
export class StudentdetailformComponent {
  birthDate: any;
  dateOfBirth: string = '';
  yearOfCompletion: string = '';
  university: string = '';
  branch: string = '';
  cgpa: string = '';
  houseNo: string = '';
  city: string = '';
  pinCode: string = '';
  state: string = '';
  formvalues:any;
  constructor(private http:HttpClient){

  }
  // imageUrl: string | ArrayBuffer | null = null;
  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   console.log(file)
  //   if (file) {
  //     const reader = new FileReader();
 
      
  //     reader.readAsDataURL(file);
 
      
  //     reader.onload = () => {
  //       this.imageUrl = reader.result;
  //     };
  //   }
  // }
  
  
  // saveChanges(){
  //   console.log("Hi");
  // }
  // discardchanges(){
    
  // }
  // discardChanges(){
    
   
  // }

  submit() {
    
  console.log("hi")
  this.formvalues = {
    dateOfBirth: this.dateOfBirth,
    yearOfCompletion: this.yearOfCompletion,
    university: this.university,
    branch: this.branch,
    cgpa: this.cgpa,
    houseNo: this.houseNo,
    city: this.city,
    pinCode: this.pinCode,
    state: this.state
  }
  console.log(this.formvalues);
  this.http.post("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/candidate/add",this.formvalues).subscribe(res=>{
    console.log(res)
  })
}
 

}

