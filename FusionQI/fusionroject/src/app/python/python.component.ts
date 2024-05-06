import { Component } from '@angular/core';
import { VideoService } from '../video.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-python',
  standalone: true,
  imports: [],
  templateUrl: './python.component.html',
  styleUrl: './python.component.css'
})
export class PythonComponent {
  constructor(private videoService: VideoService, private http: HttpClient, private routes:Router) { }
 
  apply(){
    console.log("hello ")
      this.routes.navigate(['applyform'])
  }
  imageUrl: string = '../../assets/Fullstack_Roadmap.drawio (2) 1.svg';
 
    onClick() {
      const fullScreenUrl = `${this.imageUrl}?fullscreen=true`;
      window.open(fullScreenUrl, '_blank');
    }
}
