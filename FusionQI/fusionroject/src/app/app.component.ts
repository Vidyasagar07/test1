import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { HrRegisterComponent } from './hr-register/hr-register.component';
import { ApplyformComponent } from './applyform/applyform.component';
import { MulesoftcoursesComponent } from './mulesoftcourses/mulesoftcourses.component';
import { ContactsComponent } from './Demo/contacts/contacts.component';
import { VidyasagarComponent } from './vidyasagar/vidyasagar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CandidateviewComponent } from './candidateview/candidateview.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminholderComponent } from './adminholder/adminholder.component';
import { Adminholder2Component } from './adminholder2/adminholder2.component';
import { FormsComponent } from './forms/forms.component';
import { DummyheaderComponent } from './dummyheader/dummyheader.component';
import { StudentdetailformComponent } from './studentdetailform/studentdetailform.component';
import { CandidatehomeComponent } from './candidatehome/candidatehome.component';
import { CandidatesidebarComponent } from './candidatesidebar/candidatesidebar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CandidatedetailsComponent } from './candidatedetails/candidatedetails.component';
import { AdminapplyformComponent } from './adminapplyform/adminapplyform.component';
import { CandidateprogressComponent } from './candidateprogress/candidateprogress.component';



// import { Applyform } from './applyform';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomePageComponent,
    AboutPageComponent,
    ContactinfoComponent,
    HrLoginComponent,
    HrRegisterComponent,
    ApplyformComponent,
    MulesoftcoursesComponent,
    ContactsComponent,VidyasagarComponent,HeaderComponent,
    FooterComponent
    ,CandidateviewComponent,AdminheaderComponent,
    AdminhomeComponent,AdminholderComponent,
    Adminholder2Component,
    MulesoftcoursesComponent,
    FormsComponent,DummyheaderComponent,CandidateviewComponent,CandidatesidebarComponent,
    ProgressbarComponent,
    StudentdetailformComponent,CandidateviewComponent,CandidatehomeComponent,CandidatedetailsComponent,AdminapplyformComponent,CandidateprogressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fusionroject';
}
