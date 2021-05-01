import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
import { apiURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  dishes: Dish[] = [];
  constructor(private http: HttpClient) {}

  get(): void {
    this.http.get<Dish[]>(apiURL).subscribe(
      (dishes) => {
        // Get results
        this.dishes = [...dishes];
      },
      (error) => {
        // Error handling
      },
      () => {
        // Complete
      }
    );
  }
}
