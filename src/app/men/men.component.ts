import { Component, OnInit} from '@angular/core';
import { DataService } from '../api.service';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent implements OnInit{

  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getExercises('biceps');
  }

  async getExercises(muscle: string) {
    this.dataService.getExercisesByMuscle(muscle).subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}
