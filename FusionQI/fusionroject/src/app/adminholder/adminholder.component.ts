import { Component } from '@angular/core';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
import { AdminfooterComponent } from '../adminfooter/adminfooter.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { VidyasagarComponent } from '../vidyasagar/vidyasagar.component';
import { ContactsComponent } from '../Demo/contacts/contacts.component';
import { FormsComponent } from '../forms/forms.component';
import { ContactsubComponent } from '../contactsub/contactsub.component';
import { PaymentsubComponent } from '../paymentsub/paymentsub.component';
import { SubmissionsComponent } from '../submissions/submissions.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CandidateviewComponent } from '../candidateview/candidateview.component';
import { AdmincadidateviewComponent } from '../admincadidateview/admincadidateview.component';
import { AdminapplyformComponent } from '../adminapplyform/adminapplyform.component';
import { ProgressbarComponent } from '../progressbar/progressbar.component';

@Component({
  selector: 'app-adminholder',
  standalone: true,
  imports: [AdminheaderComponent,AdminfooterComponent,RouterLink,RouterLinkActive,RouterOutlet,CommonModule,
    AdminhomeComponent,VidyasagarComponent,ContactsComponent,FormsComponent,ContactsubComponent,PaymentsubComponent,
    CandidateviewComponent,
    SubmissionsComponent,AdmincadidateviewComponent,AdminapplyformComponent,ProgressbarComponent],
  templateUrl: './adminholder.component.html',
  styleUrl: './adminholder.component.css'
})
export class AdminholderComponent {
  constructor(private route: Router){

  }
  contact(){
      this.route.navigate(['admin2'])
  }
}
