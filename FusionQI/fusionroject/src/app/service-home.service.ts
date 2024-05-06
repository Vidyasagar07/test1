import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {

  url = 'http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/';

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(this.url + 'fusion/api/saveEmployee', data);
  }
}
