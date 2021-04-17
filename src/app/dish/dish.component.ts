import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rw-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
})
export class DishComponent implements OnInit {
  name: string;
  placeholder: string;
  photo: string;

  constructor() {
    this.placeholder = 'El platillo es...';
    this.name = '';
    // this.photo =
    //   'https://www.diabelife.com/wp-content/uploads/2015/08/pan-integral-con-palta-y-huevo.jpg';
    this.photo = 'assets/dish-1.jpeg';
  }

  ngOnInit(): void {}
}
