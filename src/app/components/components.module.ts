import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DishComponent } from './dish/dish.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [DishComponent, IngredientsComponent],
  imports: [CommonModule],
  exports: [DishComponent, IngredientsComponent],
})
export class ComponentsModule {}
