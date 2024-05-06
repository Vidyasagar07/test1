import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidateregService {
  private apiUrl = 'http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/candidate/add';
  private javaApiUrl = 'http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/saveJavaEmployee';
  private mulesoftApiUrl = 'http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/postmulesoft';
  private pythonApiUrl = 'http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/api/savePythonEmployee';
 
  constructor(private http: HttpClient) { }
 
  registerStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }
 
  registerCourse(course: string, studentId: number): Observable<any> {
    switch (course) {
      case 'Java':
        return this.http.post<any>(this.javaApiUrl, { studentId });
      case 'Mulesoft':
        return this.http.post<any>(this.mulesoftApiUrl, { studentId });
      case 'Python':
        return this.http.post<any>(this.pythonApiUrl, { studentId });
      default:
        return throwError(`Course ${course} not recognized`);
    }
  }
  
}
