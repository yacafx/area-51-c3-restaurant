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

  taste = true;

  changeTest(): void {
    this.taste = !this.taste;
  }
}
