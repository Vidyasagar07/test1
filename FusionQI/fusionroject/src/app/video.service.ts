import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/video/get/2';

  constructor(private http: HttpClient) { }

  getVideoUrl(): Observable<{ videoUrl: any }> {
    return this.http.get<{ videoUrl: any }>(this.apiUrl);
  }
}
