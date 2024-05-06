import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dummyheader',
  standalone: true,
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './dummyheader.component.html',
  styleUrl: './dummyheader.component.css'
})
export class DummyheaderComponent {
  constructor(private routes: Router){

  }
    apply(){
      console.log("hello ")
        this.routes.navigate(['applyform'])
    }
}
