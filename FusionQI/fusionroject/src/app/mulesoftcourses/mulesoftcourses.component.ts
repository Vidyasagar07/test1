import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ROUTES, Route, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { VideoService } from '../video.service';
// import { Router } from 'express';

@Component({
  selector: 'app-mulesoftcourses',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HttpClientModule],
  templateUrl: './mulesoftcourses.component.html',
  styleUrl: './mulesoftcourses.component.css'
})
export class MulesoftcoursesComponent  {
  data: any;
  constructor(private videoService: VideoService, private http: HttpClient, private routes:Router) { }
 
    apply(){
      console.log("hello ")
        this.routes.navigate(['applyform'])
    }
  
   
    imageUrl: string = '../../assets/AI_Roadmap.drawio 1.svg';
     
      onClick() {
        const fullScreenUrl = `${this.imageUrl}?fullscreen=true`;
        window.open(fullScreenUrl, '_blank');
      }
  videoUrl: string = '';

  

  ngOnInit(): void {
    this.loadVideoData();
  }

  loadVideoData(): void {
    this.http.get("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/video/get/1", { responseType: 'arraybuffer' })
      .subscribe(
        (data: ArrayBuffer) => {
          this.displayVideo(data);
        },
        error => {
          console.error('Error fetching video data:', error);
        }
      );
  }

  displayVideo(blobData: ArrayBuffer): void {
    const blob = new Blob([blobData], { type: 'video/mp4' });
    console.log(blob)
    // Create object URL for the Blob object
    this.videoUrl = window.URL.createObjectURL(blob);
  }
  
}
