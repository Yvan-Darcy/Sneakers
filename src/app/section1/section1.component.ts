import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {

  selectedPicture: string = 'pictures/images.jpeg'; 

  displayPicture(imageUrl: string) {
    this.selectedPicture = imageUrl;
  
    const clickedImage = document.querySelector('img[src="' + imageUrl + '"]');
  
    if (clickedImage) {
      clickedImage.classList.add('selected');
    }
  
    const previouslySelectedImages = document.querySelectorAll('img.selected');
    previouslySelectedImages.forEach(image => image.classList.remove('selected'));
  }
  
}