import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-javabatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './javabatch.component.html',
  styleUrl: './javabatch.component.css'
})
export class JavabatchComponent  {
  data: any;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/getJavaEmployees").subscribe(res=>{
      this.data = res
      console.log(this.data.date_of_joining)
      console.log(this.data)
    })
    
  }
  searchCandidates(){
 
  }
}
