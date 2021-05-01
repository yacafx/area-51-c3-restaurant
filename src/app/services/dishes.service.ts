import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
import { Observable } from 'rxjs';
import { apiURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  dishes$: Observable<Dish[]>;

  constructor(private http: HttpClient) {
    this.dishes$ = this.get();
  }

  get(): Observable<Dish[]> {
    return this.http.get<Dish[]>(apiURL);
  }

  delete(dish: Dish): void {
    localStorage.setItem('dish', dish.name);
    localStorage.setItem('dishObject', JSON.stringify(dish));

    const result = localStorage.getItem('dishObject');
    console.log(JSON.parse(result || 'data'));

    this.http.delete<Dish>(`${apiURL}/${dish.id}`).subscribe();
  }
}
