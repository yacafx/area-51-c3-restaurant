import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
import { Observable } from 'rxjs';
import { apiURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  constructor(private http: HttpClient) {}

  get(): Observable<Dish[]> {
    return this.http.get<Dish[]>(apiURL);
  }
}
