import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises';
  private apiKey = '03uRm35v+HVe/0Z7ZiPZiw==nXZywLhYndX6ZiTT';

  constructor(private http: HttpClient) { }

  getExercisesByMuscle(muscle: string): Observable<any> {
    const headers = new HttpHeaders().append('X-Api-Key', this.apiKey);
    //console.log('aaaa', this.http.get(`${this.apiUrl}?muscle=${muscle}`, { headers }))
    return this.http.get(`${this.apiUrl}?muscle=${muscle}`, { headers });
  }
}
