import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, ComponentsModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
