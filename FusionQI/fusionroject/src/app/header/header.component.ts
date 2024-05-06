import { Component } from '@angular/core';
import { ROUTES, Route, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterModule,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
    query: string = ''; // Define query property
  suggestions: string[] = [];
  username: any;
 
  constructor(private searchService: SearchService, private router: Router ,public authService: AuthService) { }
  // get isLoggedIn(): boolean {
  //   return this.authService.isLogged;
  // }
  // logout() {
  //   this.authService.setLoggedIn(false) ;
  //   this.router.navigate(['/login']);
  // }
  login() {
    this.router.navigate(['/login']);
    
    // this.authService.setLoggedIn(true);
  }
 
//   search(data:any){
//      for(let dt of data){
//        this.serachfilter.push({
//          name: dt.firstName,
//          id: dt.id
//        });
//      }
//      return this.serachfilter;
//    }
 
//   serachfilter:any=[];
//    employeeDetails: any;
//    empId:any;
//    noNavigation:any = 0;
//    userId:any;
//  searchText: any;
onSearchEnter() {
  if (this.query.length > 0) {
    this.searchService.getSearchSuggestions(this.query)
      .subscribe(suggestions => {
        this.suggestions = suggestions;
      });
  } else {
    this.suggestions = [];
  }
}
onSearch(){
  
}

ngOnInit() {
  // Get the username of the logged-in user
  // For example, you might have a method in AuthenticationService to get the username
  // this.username = this.authService.getUsername();
  // this.username = window.localStorage.getItem('token');
  
}
// getUsername(): string {

// }
onSelectSuggestion(suggestion: string) {
  this.query = suggestion;
  this.suggestions = []; // Clear suggestions
  this.navigateToSuggestion(suggestion);
}

private navigateToSuggestion(suggestion: string) {
  switch (suggestion.toLowerCase()) {
    case 'java full stack':
      this.router.navigate(['/javafullstack']);
      break;
    case 'mulesoft':
      this.router.navigate(['/mulecourrse']);
      break;
    case 'python':
      this.router.navigate(['/python']);
      break;
    // Add more cases for other suggestions
    default:
      // Handle default case, maybe show an error message
      break;
  }
}

goToDashboard() {
  // Navigate to the users' page
  if(window.localStorage.getItem('dep') == 'management'){
    this.router.navigate(['/adminholder']);
  }else if(window.localStorage.getItem('dep') =='null'){
    this.router.navigate(['/home']);
  }else{
    this.router.navigate(['/studentholder']);
  }
  
}
logout(){
    // this.authService.isnotlogged();
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('dep')
    window.localStorage.removeItem('id')
    this.router.navigate(['/login']);
}


}
