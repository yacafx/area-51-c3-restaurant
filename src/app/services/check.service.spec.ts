import { TestBed } from '@angular/core/testing';
import { Dish } from 'projects/data-models/src/public-api';
import { jsonDishes } from '../../assets/dishes.json';
import { CheckService } from './check.service';

describe('CheckService', () => {
  let service: CheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove a dish from the list of dishes', () => {
    // Arrange
    const dishToRemove: Dish = {
      name: 'Ceviche JSON',
      price: '1234',
      available: true,
    };

    service.add(jsonDishes[0]);
    service.add(jsonDishes[1]);
    service.add(jsonDishes[2]);

    // Act
    service.remove(dishToRemove);

    // Assert
    expect(service.products.length).toEqual(2);
  });
});
