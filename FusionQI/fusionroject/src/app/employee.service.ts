import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Employee } from "./employee";
import { catchError, throwError } from "rxjs";
import { environment } from "./environment";

 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  
 
  private apiBaseUrl = environment.apiBaseUrl;
  getbyid: any;
 
  constructor(private httpClient: HttpClient) { }
 
  // getEmployeesList(): Observable<Employee[]>{
  //   return this.httpClient.get<Employee[]>(`${this.baseURL}`)
 
  // }
  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.apiBaseUrl}/employee/add`,employee);
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.apiBaseUrl}/employee/get/${id}`);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiBaseUrl}/fusion/api/getEmployees`);
  }
  getAllEmployeeshome(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiBaseUrl}/fusion/api/getEmployees`);
  }
  getAllEmployeesContact(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiBaseUrl}/contact/all`);
  }
  getAllEmployeePayment(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiBaseUrl}/api/fusionall`);
  } 
  // deleteEmployeeById(id: number | undefined): Observable<any> {
  //   if (id === undefined || id === null) {
  //     // Handle the case where id is undefined or null
  //     return throwError('Invalid employee ID');
  //   }
  //   return this.httpClient.delete<any>(`${this.apiBaseUrl}/employee/delete/${id}`);
  // }
  
  // updateEmployee(id: number, employee: Employee): Observable<object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }
  deleteEmployee(id: number): Observable<object> {
    return this.httpClient.delete(`${this.apiBaseUrl}/employee/delete/${id}`);
  }
  updateJobStatus(employeeId: number, jobStatus: string): Observable<string> {
    const url = `${this.apiBaseUrl}/employee/updateJobStatus/${employeeId}`;
    const params = { jobStatus }; 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Add any other headers if needed
      })
    };
    // Your HTTP request without headers
    return this.httpClient.put<string>(url, null, { params });
  }
  getShortlistedEmployees(): Observable<Employee[]> {
    const url = `${this.apiBaseUrl}/employee/getByJobStatus/shortlisted`;
  
    // Add any required headers or parameters
  
    return this.httpClient.get<Employee[]>(url);
  }
  getProgressData(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBaseUrl}/candidate/progress`);
  }
 


  updateProgressData(currentStep: number, completedSteps: number): Observable<any> {
    const url = `${this.apiBaseUrl}/candidate/updateProgress`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    };
 
    const params = new HttpParams()
      .set('currentStep', currentStep.toString())
      .set('completedSteps', completedSteps.toString());
 
    return this.httpClient.put<any>(url, null, { params, ...httpOptions });
  }
}


