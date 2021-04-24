import { Component, OnInit } from '@angular/core';
import { Country } from 'projects/data-models/src/lib/interfaces/country.interfaces';

@Component({
  selector: 'rw-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.loadCountries().then((country) => console.log(country));
  }

  async loadCountries(): Promise<Country> {
    const response = await fetch('https://restcountries.eu/rest/v2/all');

    const countries = await response.json();

    return countries.filter((country: Country) => country.name === 'Peru')[0];
  }
}
