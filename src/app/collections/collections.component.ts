import { Component } from '@angular/core';
import { Section1Component } from '../section1/section1.component';
import { Section2Component } from '../section2/section2.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [Section1Component, Section2Component],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

}
