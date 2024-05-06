import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcandidates',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './allcandidates.component.html',
  styleUrl: './allcandidates.component.css'
})
export class AllcandidatesComponent implements OnInit {
  data: any;
  id: any;
  batchNo: any;
  userName: any;
  gender: any;
  password: any;
  syllabusStatus: any;
  course:any;
  completedSteps: any;
  phoneNumber: any;
  alternateNo: any;
  email: any;
  houseNo: any;
  city: any;
  pinCode: any;
  state: any;
  yearOfCompletion: any;
  branch: any;
  university: any;
  cgpa: any;
  dateOfJoin: any;
  dateOfBirth: any;
  currentSteps: any;
  firstName: any;
  lastName: any;
  constructor(private http: HttpClient){

  }
ngOnInit(): void {
  this.http.get("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/candidate/all").subscribe(res=>{
    this.data = res
    console.log(this.data)

    
      this.id= this.data.id,
      this.batchNo = this.data.batchNo,
      this.firstName = this.data.firstName,
      this.lastName = this.data.lastName,
      this.userName = this.data.userName,
      this.gender = this.data.gender,
      this.password =  this.data.password,
      this.syllabusStatus =  this.data.syllabusStatus,
      this.course =  this.data.course,
      this.completedSteps = this.data.completedSteps,
      this.phoneNumber =  this.data.phoneNumber,
      this.alternateNo =  this.data.alternateNo,
      this.email =  this.data.email,
      this.houseNo =  this.data.houseNo,
      this.city =  this.data.city,
      this.pinCode =  this.data.pinCode,
      this.state = this.data.state,
      this.yearOfCompletion =  this.data.yearOfCompletion,
      this.university =  this.data.university,
      this.branch =  this.data.branch,
      this.cgpa =  this.data.cgpa,
      this.dateOfJoin =  this.data.dateOfJoin,
      this.dateOfBirth =  this.data.dateOfBirth,
      this.currentSteps =  this.data.currentSteps
  
  })
  
}
 // [x: string]: any;
  // private destroy$ = new Subject<void>();
  // public loading = false;
  // public errorMessage: string | null = null;
  // public appliedCandidates: Employee[] = [];
  // public filteredCandidates: Employee[] = [];
  // constructor(
  //   private employeeService: EmployeeService,
  //   private http: HttpClient,
  //   private zone: NgZone,
  //   private cdr: ChangeDetectorRef
  // ) {}
 
  // ngOnInit() {
  //   this.zone.runOutsideAngular(() => {
  //     interval(100).pipe(take(1)).subscribe(() => {
  //         this.zone.run(() => {
  //           this.getAllEmployeePayment();
  //         });
  //       });
  //   });
  // }
 
  // ngOnDestroy() {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }
 
  // public getAllEmployeePayment(): void {
  //   this.loading = true;
  //   this.errorMessage = null;
 
  //   this.employeeService.getAllEmployeePayment().subscribe({
  //     next: (response: Employee[]) => {
  //       this.appliedCandidates = response;
  //       this.cdr.detectChanges();
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.loading = false;
  //       console.error('Error fetching applied candidates:', error);
  //     },
  //     complete: () => {
  //       this.loading = false;
  //     },
  //   });
  // }
 
 
  // public searchCandidates(key: string): void {
  //   console.log(key);
   
  //   let results: Employee[] = [];
  //   results = this.appliedCandidates.filter(employee =>
  //     (employee.firstName?.toLowerCase().includes(key.toLowerCase()) ||
  //     employee.lastName?.toLowerCase().includes(key.toLowerCase()) ||
  //     (employee.id === Number(key)) ||
  //     (employee.phone === Number(key)) ||
 
  //     employee.personalEmail?.toLowerCase().includes(key.toLowerCase()) ||
     
  //     employee.dateOfBirth?.toLowerCase().includes(key.toLowerCase())) ?? false
  //   );
 
  //   if (results.length === 0 || !key) {
  //     this.getAllEmployeePayment();
  //   } else {
  //     this.appliedCandidates = results;
  //   }
// }

 
searchCandidates(){
 
}
}
