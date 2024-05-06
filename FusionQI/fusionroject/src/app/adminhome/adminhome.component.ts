import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, take } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})


export class AdminhomeComponent {
  private destroy$ = new Subject<void>();
  public loading = false;
  public errorMessage: string | null = null;
  public appliedCandidates: Employee[] = [];
  public filteredCandidates: Employee[] = [];
  public isButtonClicked = false; // Declare the property only once

  constructor(
    private route: Router,
    private employeeService: EmployeeService,
    private http: HttpClient,
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    public authService: AuthService
  ) { }

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
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error('Error fetching applied candidates:' + error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  // Method to handle button click
  public handleButtonClick(): void {
    this.isButtonClicked = true; // Set the button clicked flag
    this.getEmployeeshome(); // Fetch applied candidates
  }

  public searchCandidates(key: string): void {
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

  contact() {
    this.route.navigate(['/admin2'])
  }

}

