import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import { MenuComponent } from './menu/menu.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    MenuComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
