import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PaymentsubComponent } from '../paymentsub/paymentsub.component';
import { SubmissionsComponent } from '../submissions/submissions.component';
import { ContactsComponent } from '../Demo/contacts/contacts.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [RouterLink,PaymentsubComponent,SubmissionsComponent,ContactsComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {


  constructor(      private router:Router,
    ){}
  Appsubcourse(){
    console.log("hi")
    this.router.navigate(['/paymentsub']);

    
 
  }
  AppHome(){
    this.router.navigate(['/submission']);

  }
  Enqcontact(){
    this.router.navigate(['/contactsub']);

  }



}