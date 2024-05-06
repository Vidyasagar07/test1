import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-candidateview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidateview.component.html',
  styleUrl: './candidateview.component.css'
})
export class CandidateviewComponent {
  imageUrl: string | ArrayBuffer | null = null;
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
 
      // Read the image file as a data URL
      reader.readAsDataURL(file);
 
      // Set the image source when the file is loaded
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }
  
  
  saveChanges(){
    console.log("Hi");
  }
  discardChanges(){
    
  }
}
