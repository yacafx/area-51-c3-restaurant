import { Component, OnInit } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
import { CheckService } from '../services/check.service';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  average = 0.6589;
  today = 1619278296373;
  selectedDish = 'No hay';

  constructor(private check: CheckService, public data: DishesService) {}

  ngOnInit(): void {
    this.getDishes();
    this.check.total();
  }

  getDishes(): void {}

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

  deleteDish(dish: Dish): void {
    this.data.delete(dish);
  }
}
