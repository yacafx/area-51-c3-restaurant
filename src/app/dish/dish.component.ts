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
    this.name = 'Pan con palta';
    // this.photo =
    //   'https://www.diabelife.com/wp-content/uploads/2015/08/pan-integral-con-palta-y-huevo.jpg';
    this.photo = 'assets/dish-1.jpeg';
  }

  ngOnInit(): void {}

  changeName(): void {
    this.name = 'Pan con huevo';
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('Input -> ' + input.value);
  }

  handleBlur(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('Blur -> ' + input.value);
  }

  handleKeyUp(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('KeyUp -> ' + input.value);
  }
}
