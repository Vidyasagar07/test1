import { CommonModule } from '@angular/common';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { get } from 'http';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-vidyasagar',
  standalone: true,
  imports: [HttpClientModule, CommonModule ],
  templateUrl: './vidyasagar.component.html',
  styleUrl: './vidyasagar.component.css'
})
export class VidyasagarComponent implements OnInit{
  data: any;
  name: any;
  email:any;
  number:any;
  single: any;
  message: any;
  
  
  constructor( private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/contact/all").subscribe(res=>{
      this.data = res
      console.log(this.data)
    })
    
  }
  texttoshow = "akhil baddi"
  hi(number:any){
    console.log(number)
    this.http.get("http://localhost:8080/contact/get/"+number).subscribe(res=>{
      this.single = res;
      console.log(this.single.fullname)
      this.name = this.single.firstName 
      this.email = this.single.email
      this.number = this.single.phoneNumber
      this.message = this.single.message;
      console.log(res,"hi")
      
    })

  }
  

}
