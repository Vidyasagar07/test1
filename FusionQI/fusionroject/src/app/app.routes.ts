import { ROUTES, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactsComponent } from './Demo/contacts/contacts.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { HrRegisterComponent } from './hr-register/hr-register.component';
// import { Applyform } from './applyform';
import { MulesoftcoursesComponent } from './mulesoftcourses/mulesoftcourses.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { NgModule } from '@angular/core';
import { JavafullstackComponent } from './javafullstack/javafullstack.component';
import { ContactsubComponent } from './contactsub/contactsub.component';
import { FormsComponent } from './forms/forms.component';
import { PaymentsubComponent } from './paymentsub/paymentsub.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ApplyformComponent } from './applyform/applyform.component';
import { AdminholderComponent } from './adminholder/adminholder.component';
// import { AdminhomeComponent } from './adminhome/adminhome.component';
import { Adminholder2Component } from './adminholder2/adminholder2.component';
import { PythonComponent } from './python/python.component';
import { PythonbatchComponent } from './pythonbatch/pythonbatch.component';
import { JavabatchComponent } from './javabatch/javabatch.component';
import { MulebatchComponent } from './mulebatch/mulebatch.component';
import { AdmincadidateviewComponent } from './admincadidateview/admincadidateview.component';
import { AllcandidatesComponent } from './allcandidates/allcandidates.component';
import { StudentdetailformComponent } from './studentdetailform/studentdetailform.component';
import { CandidatedetailsComponent } from './candidatedetails/candidatedetails.component';
import { CandidatesidebarComponent } from './candidatesidebar/candidatesidebar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CandidatehomeComponent } from './candidatehome/candidatehome.component';
import { StudentholderComponent } from './studentholder/studentholder.component';
import { AdminapplyformComponent } from './adminapplyform/adminapplyform.component';
import { AuthService } from './auth.service';
import { AuthenticationService } from './authentication.service';
import { authGuard } from './auth.guard';
import { CandidateupdateComponent } from './candidateupdate/candidateupdate.component';
import { CandidateprogressComponent } from './candidateprogress/candidateprogress.component';

export const routes: Routes = [
    {path:"home",component:HomePageComponent},
    {path:"",component:HomePageComponent},
    {path:"About",component:AboutPageComponent},
    {path:"contact",component:ContactsComponent},
    {path:"login",component:HrLoginComponent},
    {path:"register",component:HrRegisterComponent},
    {path:"applyform",component: ApplyformComponent},
    {path:"mulecourrse",component:MulesoftcoursesComponent},
    {path:"contactinfo",component:ContactinfoComponent},
    {path:"inbox",component:ContactinfoComponent},
    {path:"javafullstack",component:JavafullstackComponent},
    {path:"contactsub",component:ContactsubComponent},
    {path:"forms",component:FormsComponent},
    {path:"paymentsub",component:PaymentsubComponent},
    {path:"submission",component:SubmissionsComponent},
    {path:"adminholder",component:AdminholderComponent ,canActivate: [authGuard]},
    {path:"admin2",component:Adminholder2Component},
    {path:"python",component:PythonComponent},
    {path: "pythonbatch",component:PythonbatchComponent},
    {path: "javabatch",component:JavabatchComponent},
    {path: "mulebatch",component:MulebatchComponent},
    {path: "admincandidateview",component: AdmincadidateviewComponent},
    {path:"allcandidatesview",component: AllcandidatesComponent},
    {path:"candidateprogress",component: CandidateprogressComponent},


    {path:"studentform",component: StudentdetailformComponent},
    {path:"getstudentdetails",component: CandidatedetailsComponent },
    {path:"studentholder",component: StudentholderComponent,canActivate: [authGuard]
       
     },
    
    {path:"candidatesidebar",component: CandidatesidebarComponent },
    {path:"progressbar",component: ProgressbarComponent },
 
    {path: 'adminapplyform', component: AdminapplyformComponent },
    {path: 'candidateupdate', component: CandidateupdateComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  class MyNgModule {}