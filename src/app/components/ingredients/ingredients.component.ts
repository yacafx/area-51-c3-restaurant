import { Component, OnInit } from '@angular/core';
import { Country } from 'projects/data-models/src/lib/interfaces/country.interfaces';
import { Person } from 'projects/data-models/src/lib/interfaces/people.interfaces';

@Component({
  selector: 'rw-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.loadCountries().then((result) => console.log(result));
  }

  async loadCountries(): Promise<[Country, Person[]]> {
    const [responseCountries, responseSwars] = await Promise.all([
      fetch('https://restcountries.eu/rest/v2/all'),
      fetch('https://swapi.dev/api/people'),
    ]);

    const countries = await responseCountries.json();
    const responseSWapi = await responseSwars.json();

    const country: Country = countries.filter(
      (item: Country) => item.name === 'Peru'
    )[0];

    const people: Person[] = responseSWapi.results;

    return [country, people];
  }
}
