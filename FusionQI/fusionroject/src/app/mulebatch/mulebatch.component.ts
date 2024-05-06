import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mulebatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mulebatch.component.html',
  styleUrl: './mulebatch.component.css'
})
export class MulebatchComponent {
  data: any;
  constructor(private http: HttpClient){

  }
ngOnInit(): void {
  this.http.get("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/getfusionall").subscribe(res=>{
    this.data = res
    console.log(this.data)
  })
  
}
imageUrl: string = '../../assets/muleroad.svg';
 
  onClick() {
    const fullScreenUrl = `${this.imageUrl}?fullscreen=true`;
    window.open(fullScreenUrl, '_blank');
  }
  searchCandidates(){
 
  }
}
