import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  operate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation === '+') {
      return a + b;
    }
    if (operation === '-') {
      return a - b;
    }
    if (operation === '*') {
      return a * b;
    }
    if (operation === '/') {
      return a / b;
    }
    if (!operation) {
      return b;
    }
  }
}
