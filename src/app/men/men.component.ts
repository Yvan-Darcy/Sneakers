import { Component, OnInit } from '@angular/core';
import { DataService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent implements OnInit {
  isLoading = true;
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getExercises('biceps');
  }

  async getExercises(muscle: string) {
    this.isLoading = true;
    this.dataService.getExercisesByMuscle(muscle).subscribe(response => {
      this.data = response;
      //console.log(this.data);
      this.isLoading = false;
    });
  }
  
}
