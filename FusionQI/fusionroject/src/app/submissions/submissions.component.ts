import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, interval, take, takeUntil, throwError } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-submissions',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent {
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
            this.getEmployeeshome();
          });
        });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getEmployeeshome(): void {
    this.loading = true;
    this.errorMessage = null;

    this.employeeService.getAllEmployeeshome().subscribe({
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
      (employee.Fullname?.toLowerCase().includes(key.toLowerCase()) ||
      employee.lastName?.toLowerCase().includes(key.toLowerCase()) ||
      employee.email?.toLowerCase().includes(key.toLowerCase()) ||
      (employee.id === Number(key)) ||
      (employee.phone === Number(key)) ||
      employee.email?.toLowerCase().includes(key.toLowerCase())) ?? false
    );
  
    if (results.length === 0 || !key) {
      this.getEmployeeshome(); 
    } else {
      this.appliedCandidates = results; 
    }
}

  }