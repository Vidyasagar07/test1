import { Component } from '@angular/core';
import { SubmissionsComponent } from '../submissions/submissions.component';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
import { AdminfooterComponent } from '../adminfooter/adminfooter.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { VidyasagarComponent } from '../vidyasagar/vidyasagar.component';
import { ContactsComponent } from '../Demo/contacts/contacts.component';
import { FormsComponent } from '../forms/forms.component';
import { ContactsubComponent } from '../contactsub/contactsub.component';
import { PaymentsubComponent } from '../paymentsub/paymentsub.component';

@Component({
  selector: 'app-adminholder2',
  standalone: true,
  imports: [AdminheaderComponent,AdminfooterComponent,RouterLink,RouterLinkActive,RouterOutlet,CommonModule,
    AdminhomeComponent,VidyasagarComponent,ContactsComponent,FormsComponent,ContactsubComponent,PaymentsubComponent,SubmissionsComponent],
  templateUrl: './adminholder2.component.html',
  styleUrl: './adminholder2.component.css'
})
export class Adminholder2Component {

}
