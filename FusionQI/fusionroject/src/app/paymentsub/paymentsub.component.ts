import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, NgZone } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, interval, take, takeUntil, throwError } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-paymentsub',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './paymentsub.component.html',
  styleUrl: './paymentsub.component.css'
})
export class PaymentsubComponent {

  [x: string]: any;
  private destroy$ = new Subject<void>();
  public loading = false;
  public errorMessage: string | null = null;
  public appliedCandidates: Employee[] = [];
  public filteredCandidates: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      interval(100).pipe(take(1)).subscribe(() => {
          this.zone.run(() => {
            this.getAllEmployeePayment();
          });
        });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getAllEmployeePayment(): void {
    this.loading = true;
    this.errorMessage = null;

    this.employeeService.getAllEmployeePayment().subscribe({
      next: (response: Employee[]) => {
        this.appliedCandidates = response;
        this.cdr.detectChanges();
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
        console.error('Error fetching applied candidates:', error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  

  public searchCandidates(key: string): void {
    console.log(key);
    
    let results: Employee[] = [];
    results = this.appliedCandidates.filter(employee =>
      (employee.firstName?.toLowerCase().includes(key.toLowerCase()) ||
      employee.lastName?.toLowerCase().includes(key.toLowerCase()) ||
      (employee.id === Number(key)) ||
      (employee.phone === Number(key)) ||

      employee.personalEmail?.toLowerCase().includes(key.toLowerCase()) ||
      
      employee.dateOfBirth?.toLowerCase().includes(key.toLowerCase())) ?? false
    );
  
    if (results.length === 0 || !key) {
      this.getAllEmployeePayment(); 
    } else {
      this.appliedCandidates = results; 
    }
}

  }