import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidateprogress',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './candidateprogress.component.html',
  styleUrl: './candidateprogress.component.css'
})
export class CandidateprogressComponent {
  steps: string[] = ['Phase-1','Phase-2','Phase-3','Phase-4','Phase-5','Phase-6','Completed'];
  currentStep: number = 0;
  completedSteps: number = 0;
  apiBaseUrl: any;
  studid: any;
  batch: any;
  course: any;
  firstName: any;
  lastName: any;
  phoneNumber: any;
  id: any;
 
  constructor(private employeeService: EmployeeService,private httpClient:HttpClient) { }
 
  ngOnInit() {
    this.fetchProgressData();
    this.fetchCandidateDetails();
  }
  fetchCandidateDetails(){
    this.studid=window.localStorage.getItem('id')
    this.employeeService.getbyid(this.studid).subscribe(
      data =>{
        
        console.log(data,"hi")
        this.batch = data.batchNo;
        this.course = data.course;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.phoneNumber = data.phoneNumber;
        this.id= data.id;
      }
    )
  }
  fetchProgressData() {
    this.employeeService.getProgressData().subscribe(
      data => {
        if (data && data.length > 0) {
          const employee = data[0];
          this.currentStep = employee.currentStep;
          this.completedSteps = employee.completedSteps;
        } else {
          console.error("No progress data received from the server.");
        }
      },
      error => {
        console.error("Error fetching progress data:", error);
      }
    );
  }
 

}


