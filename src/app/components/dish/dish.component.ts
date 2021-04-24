import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';

@Component({
  selector: 'rw-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
})
export class DishComponent implements OnInit, OnChanges, Dish {
  @Input() name = 'Default name';
  @Input() photo: string | undefined;
  @Input() price = '';
  @Input() stock: boolean | undefined;

  private placeholder =
    'https://via.placeholder.com/300.png/EFF1FA/3850b7?text=The+Dishes';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.photo = changes.photo.currentValue || this.placeholder;

    this.stock = changes.stock.currentValue || false;
  }
}
