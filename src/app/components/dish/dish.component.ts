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
export class DishComponent implements OnInit, OnChanges {
  @Input() dish: Dish = {
    name: '',
    photo: '',
    price: '',
    available: false,
  };

  private placeholder =
    'https://via.placeholder.com/300.png/EFF1FA/3850b7?text=The+Dishes';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dish.photo = changes.dish.currentValue.photo || this.placeholder;

    this.dish.available = changes.dish.currentValue.available || false;
  }
}
