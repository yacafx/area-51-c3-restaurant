import { Injectable } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  private dishes: Dish[] = [];
  private beverages = {};

  constructor() {
    console.log('::: Hola desde el servicio');
  }

  total(): void {
    console.log('Aqui irá el total');
  }

  /** This method will add a dish on the check dishes list */
  add(dish: Dish): void {
    this.dishes = [dish, ...this.dishes];
    console.log(':::', this.dishes);
  }

  /** Get the check product list */
  get products(): Dish[] {
    return this.dishes;
  }

  /** Remove the indicated dish from the dishes array */
  remove(dish: Dish): void {
    this.dishes = [...this.dishes.filter((item) => item.name !== dish.name)];
  }
}
