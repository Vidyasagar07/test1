import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css'
})
export class ProgressbarComponent {
  goToStep(arg0: number) {
    throw new Error('Method not implemented.');
    }
      steps: string[] = ['Phase-1  ','Phase-2   ','Phase-3','Phase-4','Phase-5','Phase-6','Phase-7' ,'completed'];
      
      completedSteps: number = 0;
      currentStep: number = 0;
      
      constructor(private employeeService: EmployeeService) { }
     
      ngOnInit() {
        this.fetchProgressData();
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
     
      goBack() {
        this.currentStep = this.completedSteps+1
        console.log(this.completedSteps);
        
        if (this.currentStep > 1) {
          this.currentStep--;
          this.completedSteps = this.currentStep - 1;
          this.updateProgressData(); 
          console.log("next triig");
        }
      }
     
      goNext() {
        console.log(this.completedSteps);
        this.currentStep = this.completedSteps+1
        if (this.currentStep < this.steps.length) {
          if (this.currentStep === this.steps.length - 1) {
            // Special feature when the last step is clicked
            this.completeProgressBar();
          } else {
            // Increment steps as usual
            this.currentStep++;
            this.completedSteps = this.currentStep - 1;
            this.updateProgressData();
            console.log("next triigered")
          }
        }
      }
      isLastStep(index: number): boolean {
        return index === this.steps.length - 1 && this.currentStep === this.steps.length && this.completedSteps === this.steps.length;
      }
     
      completeProgressBar() {
        // Special feature to complete the progress bar
        this.currentStep++;
        this.completedSteps = this.steps.length;
        this.updateProgressData();
      }
     
     
      updateProgressData() {
        const progressData = {
          currentStep: this.currentStep,
          completedSteps: this.completedSteps
        };
        this.employeeService.updateProgressData(this.currentStep, this.completedSteps)
      .subscribe(response => {
        // Handle response as needed
        console.log(response)
      }, error => {
        // Handle error
      });
    }
    }