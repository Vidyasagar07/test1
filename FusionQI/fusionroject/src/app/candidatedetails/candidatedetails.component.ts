import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';
import { EmployeeService } from '../employee-service.service';
import { ThisReceiver } from '@angular/compiler';
// import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-candidatedetails',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './candidatedetails.component.html',
  styleUrl: './candidatedetails.component.css'
})
export class CandidatedetailsComponent implements OnInit {
  Firstname: any;
  candidate: any;
  lastname: any;
  username: any;
  password: any;
  Email: any;
  Phonenumber: any;
  id: any;
  alternatenumber: any;
  dateofbirth: any;
  university: any;
  dateofjoining: any;
  gender: any;
  houseno: any;
  city: any;
  pincode: any;
  state: any;
  cgapa: any;
  c: any;
  cgpa: any;
  branch: any;
  yearofcompletion: any;
  isEditable: String="false";
  data: any;
  name: any;
  college: any;
  course: any;
  batchNo: any;
  studid: any;
  Gender: string | undefined;
  fname: string | undefined;
  lname: string | undefined;
  dob: string | undefined;
  emai: string | undefined;
  doornumber: string | undefined;
  mnumber: string | undefined;
  City: string | undefined;
  Pincode: string | undefined;
  State: string | undefined;
  College: string | undefined;
  Branch: string | undefined;
  CGPA: string | undefined;
  BatchNo: string | undefined;
  Course: string | undefined;
  doj: string | undefined;
  updateData: any;
  Id: string | undefined;
  dateOfJoin: any;
   
      constructor(private http:HttpClient,private route: Router,private empsevice: EmployeeService){}
      ngOnInit(): void {
      //   this.http.get('http://localhost:8081/candidate/get/1').subscribe( res=>{
      //       
      // })
      this.fetchCandidateDetails();
 
    }
    Edit(){
   
    this.isEditable ="true"
     console.log("edited")
    }
    
    fetchCandidateDetails(){
      this.studid=window.localStorage.getItem('id')
      this.empsevice.getbyid(this.studid).subscribe(
        
        data =>{
          
          console.log(data.firstName)
          this.id = data.id;
          this.username = data.userName;
          this.password = data.password;
          this.Firstname = data.firstName;
          this.lastname = data.lastName;
          this.dateofbirth = data.dateOfBirth;
          this.gender = data.gender;
          this.Email = data.email;
          this.Phonenumber = data.phoneNumber;
          this.alternatenumber = data.alternateNo;
          this.houseno = data.houseNo;
          this.college = data.university;
          this.city = data.city;
          this.pincode = data.pinCode;
          this.state = data.state;
          this.branch = data.branch;
          this.dateOfJoin = data.dateOfJoin;
          this.yearofcompletion = data.yearOfCompletion;
          this.cgpa = data.cgpa;
          this.course = data.course;
          this.batchNo = data.batchNo;
          console.log(this.dateOfJoin)
        }
      )
    }
    update(){
      // this.Gender =document.getElementById("gender")?.innerHTML
      
      this.Id=document.getElementById("id")?.innerHTML
      this.fname =document.getElementById("firstName")?.innerHTML
      this.lname =document.getElementById("lastName")?.innerHTML
      this.dob =document.getElementById("dateofbirth")?.innerHTML
      this.Gender =document.getElementById("gender")?.innerHTML
      this.emai =document.getElementById("Email")?.innerHTML
      this.mnumber =document.getElementById("Phonenumber")?.innerHTML
      this.doornumber =document.getElementById("houseno")?.innerHTML
      this.City =document.getElementById("city")?.innerHTML
      this.Pincode =document.getElementById("pincode")?.innerHTML
      this.State =document.getElementById("state")?.innerHTML
      this.College =document.getElementById("college")?.innerHTML
      this.Branch =document.getElementById("branch")?.innerHTML
      this.CGPA =document.getElementById("cgpa")?.innerHTML
      this.yearofcompletion =document.getElementById("yearofcompletion")?.innerHTML
      this.BatchNo =document.getElementById("batchNo")?.innerHTML
      this.Course =document.getElementById("course")?.innerHTML
      this.doj =document.getElementById("dateOfJoin")?.innerHTML
      console.log(this.doornumber)
      console.log(this.Gender)
        this.updateData =   {
          "id":this.id,
          "batchNo": this.BatchNo,
          "firstName": this.fname,
          "lastName":  this.lname,
          "dateOfBirth": this.dob,
          "gender": this.Gender,
          "password": this.password,
          "userName": this.username,
          "course": this.Course ,
          
          "phoneNumber":  this.mnumber,
         
          "email": this.emai,
          "houseNo": this.doornumber,
          "city":this.City,
          "pinCode": this.Pincode,
          "state": this.State,
          "yearOfCompletion": this.yearofcompletion,
          "university": this.College,
          "branch":  this.Branch,
          "cgpa":  this.CGPA,
          
         
          "dateOfJoin":this.doj 
      }
      this.studid=window.localStorage.getItem('id')
      this.http.put("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/candidate/update",this.updateData).subscribe((res)=>{
        console.log(res);
        this.isEditable = "false";
      })
    }
     
    navigateToupdate(){
      this.route.navigate(['candidateupdate'])
    }
}
