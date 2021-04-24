import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'rw-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
})
export class DishComponent implements OnInit, OnChanges {
  @Input() photo: string | undefined;
  @Input() name = 'Default name';
  @Input() price: number | undefined;
  @Input() stock: boolean | undefined;

  private placeholder =
    'https://via.placeholder.com/300.png/EFF1FA/3850b7?text=The+Dishes';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.photo = changes.photo.currentValue || this.placeholder;
  }
}
