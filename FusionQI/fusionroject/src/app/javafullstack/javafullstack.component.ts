import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-javafullstack',
  standalone: true,
  imports: [],
  templateUrl: './javafullstack.component.html',
  styleUrl: './javafullstack.component.css'
})
export class JavafullstackComponent {
  constructor(private routes: Router){

  }
    apply(){
      console.log("hello ")
        this.routes.navigate(['applyform'])
       
    }
    imageUrl: string = '../../assets/Fullstack_Roadmap.drawio (2) 1.svg';
 
    onClick() {
      const fullScreenUrl = `${this.imageUrl}?fullscreen=true`;
      window.open(fullScreenUrl, '_blank');
    }
}
