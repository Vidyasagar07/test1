import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pythonbatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pythonbatch.component.html',
  styleUrl: './pythonbatch.component.css'
})
export class PythonbatchComponent {
  data: any;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/getPythonEmployees").subscribe(res=>{
      this.data = res
      console.log(this.data)
    })
    
  }
  searchCandidates(){
 
  }
}
