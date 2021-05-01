import { Component, OnInit } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
import { jsonDishes } from '../../assets/dishes.json';
import { CheckService } from '../services/check.service';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  average = 0.6589;
  today = 1619278296373;
  selectedDish = 'No hay';

  constructor(private check: CheckService) {}

  ngOnInit(): void {
    this.dishes = [...jsonDishes];
    this.check.total();
    // console.log(':::', this.check.dishes);
  }

  getClass(dish: Dish): object {
    console.log(dish.available ?? 'warning!');

    return { available: dish.available };
  }

  getStyles(dish: Dish): object {
    return { backgroundColor: dish.available ? '#2ecc71' : '#c0392b' };
  }

  addDish(dish: Dish): void {
    this.selectedDish = dish.name;
    this.check.add(dish);
    console.log(':::', this.check.products);
  }
}
