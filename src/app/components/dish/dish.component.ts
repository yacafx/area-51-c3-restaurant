import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rw-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
})
export class DishComponent implements OnInit {
  photo = 'https://via.placeholder.com/300.png/EFF1FA/3850b7?text=The+Dishes';
  name = 'Default name';
  price = 0;
  stock = false;

  constructor() {}

  ngOnInit(): void {}
}
