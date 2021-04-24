import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
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
  @Output() add: EventEmitter<Dish> = new EventEmitter();

  private placeholder =
    'https://via.placeholder.com/300.png/EFF1FA/3850b7?text=The+Dishes';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dish.photo = changes.dish.currentValue.photo || this.placeholder;

    this.dish.available = changes.dish.currentValue.available || false;
  }

  onAdd(dish: Dish): void {
    this.add.emit(dish);
  }
}
