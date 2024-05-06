import { Component } from '@angular/core';
import { CandidateviewComponent } from '../candidateview/candidateview.component';

import { RouterLinkActive,Router } from '@angular/router';

@Component({
  selector: 'app-admincadidateview',
  standalone: true,
  imports: [AdmincadidateviewComponent],
  templateUrl: './admincadidateview.component.html',
  styleUrl: './admincadidateview.component.css'
})
export class AdmincadidateviewComponent {
  constructor(private router: Router){

  }
  Allcandidates(){
    console.log("hi")
    this.router.navigate(['/allcandidatesview']);
  }
  Java(){
    this.router.navigate(['/javabatch']);
 
  }
  Mulesoft(){
    this.router.navigate(['mulebatch']);
 
  }
  Python(){
    this.router.navigate(['/pythonbatch']);
 
  }
}
