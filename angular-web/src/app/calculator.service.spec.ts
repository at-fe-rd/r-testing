import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  const input = [[1, 1, '+'], [1, 5, '*'], [7, 2, '-'], [16, 4, '/']];
  const output = [2, 5, 5, 4 ];
  it('should be true', inject([CalculatorService], (service: CalculatorService) => {
    for (let i =  0; i < input.length; i++) {
      expect(service.operate(input[i][0], input[i][1], input[i][2])).toEqual(output[i]);
    }
  }));
});
