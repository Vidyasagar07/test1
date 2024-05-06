import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applyform } from './applyform';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApplyformService {
 
 
 
  private baseURL ="http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/fusion";
 
  constructor(private httpClient: HttpClient) { }
 
  createForm(applyform: Applyform): Observable<object>{
    return this.httpClient.post(this.baseURL, applyform);
  }
}