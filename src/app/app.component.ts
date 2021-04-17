import { Component } from '@angular/core';

@Component({
  selector: 'rw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant';
  dish = 'carapulcra';
  link =
    ' <a href="https://github.com/yacafx/area-51-c3-restaurant">Repositorio</a>';

  taste = false;
  flavor = '';

  changeTest(): void {
    this.taste = !this.taste;
  }

  updateFlavor(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.flavor = input.value;
  }
}
