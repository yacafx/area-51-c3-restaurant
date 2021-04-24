import { Component, OnInit } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
import { jsonDishes } from '../../assets/dishes.json';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  average = 0.6589;
  today = 1619278296373;

  constructor() {}

  ngOnInit(): void {
    this.dishes = [...jsonDishes];
  }

  getClass(dish: Dish): object {
    console.log(dish.available ?? 'warning!');

    return { available: dish.available };
  }

  getStyles(dish: Dish): object {
    return { backgroundColor: dish.available ? '#2ecc71' : '#c0392b' };
  }
}
