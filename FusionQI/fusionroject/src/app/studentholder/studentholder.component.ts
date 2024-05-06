import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidatesidebarComponent } from '../candidatesidebar/candidatesidebar.component';
import { CandidatehomeComponent } from '../candidatehome/candidatehome.component';
import { StudentdetailformComponent } from '../studentdetailform/studentdetailform.component';
import { ProgressbarComponent } from '../progressbar/progressbar.component';
import { CandidatedetailsComponent } from '../candidatedetails/candidatedetails.component';
import { CandidateprogressComponent } from '../candidateprogress/candidateprogress.component';

@Component({
  selector: 'app-studentholder',
  standalone: true,
  imports: [RouterOutlet,CandidatesidebarComponent,CandidatehomeComponent,StudentdetailformComponent,ProgressbarComponent,CandidatehomeComponent,CandidatedetailsComponent,CandidateprogressComponent],
  templateUrl: './studentholder.component.html',
  styleUrl: './studentholder.component.css'
})
export class StudentholderComponent {

}
