import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:8080/video/get/2';

  constructor(private http: HttpClient) { }

  getVideoUrl(): Observable<{ videoUrl: any }> {
    return this.http.get<{ videoUrl: any }>(this.apiUrl);
  }
}
