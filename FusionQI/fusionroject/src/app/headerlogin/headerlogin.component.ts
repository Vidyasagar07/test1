import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-headerlogin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headerlogin.component.html',
  styleUrl: './headerlogin.component.css'
})
export class HeaderloginComponent {
  constructor(private roter: Router){

  }

}
