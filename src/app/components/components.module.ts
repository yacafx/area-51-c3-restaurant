import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DishComponent } from './dish/dish.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
@NgModule({
  declarations: [DishComponent, IngredientsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [DishComponent, IngredientsComponent],
})
export class ComponentsModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faPlus);
  }
}
