import { Component, OnInit } from '@angular/core';
import { Dish } from 'projects/data-models/src/public-api';
import jsonData from '../../assets/dishes.json';

@Component({
  selector: 'rw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.dishes = [...this.initDishes()];
    // this.dishes = [...this.initDishesFromJson()];
    this.dishes = [...jsonData.dishes];
  }

  initDishes(): Dish[] {
    const dishes: Dish[] = [
      {
        name: 'Ceviche',
        price: '1234',
      },
      {
        name: 'Pollo a la brasa',
        photo:
          'https://www.radionacional.com.pe/sites/default/files/styles/note/public/pollo_brasa.jpg',
        price: '78383',
      },
      {
        name: 'Causa rellena',
        price: '8762',
      },
      {
        name: 'Tallarines Rojos',
        price: '2837',
      },
      {
        name: 'Lomo Saltado',
        photo:
          'https://www.196flavors.com/wp-content/uploads/2016/07/lomo-saltado-1-FP.jpg',
        price: '13434',
      },
      {
        name: 'Arroz con pato',
        photo:
          'https://lascomidasperuanas.com/wp-content/uploads/2020/06/Receta-de-arroz-con-pato-peruano.jpg',
        price: '3457',
      },
      {
        name: 'Chanfainita',
        photo:
          'https://decomidaperuana.com/wp-content/uploads/2018/06/receta-de-chanfainita.jpg',
        price: '8457',
      },
    ];
    return dishes;
  }

  initDishesFromJson(): Dish[] {
    console.log(jsonData.dishes);
    return jsonData.dishes;
  }
}
