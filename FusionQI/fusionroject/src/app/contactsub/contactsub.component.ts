import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, interval, take, takeUntil, throwError } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contactsub',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './contactsub.component.html',
  styleUrl: './contactsub.component.css'
})
export class ContactsubComponent {

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
            this.getAllEmployeesContact();
          });
        });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getAllEmployeesContact(): void {
    this.loading = true;
    this.errorMessage = null;

    this.employeeService.getAllEmployeesContact().subscribe({
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
      employee.email?.toLowerCase().includes(key.toLowerCase()) ||
      

      employee.category?.toLowerCase().includes(key.toLowerCase()) ||
      employee.message?.toLowerCase().includes(key.toLowerCase()) ||


      (employee.id === Number(key)) ||
      (employee.Phone === Number(key)) ||

      employee.dateOfBirth?.toLowerCase().includes(key.toLowerCase())) ?? false
    );
  
    if (results.length === 0 || !key) {
      this.getAllEmployeesContact(); 
    } else {
      this.appliedCandidates = results; 
    }
}

  }