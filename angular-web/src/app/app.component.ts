import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result = 0;
  prevEntry = 0;
  operation = null;
  currentEntry = '0';
  displayValue = 0;
  column = [
    ['C', 'CE', 'back', '+/-', '%'],
    ['7', '8', '9', '/', 'sqrt'],
    ['4', '5', '6', '*', '1/x'],
    ['1', '2', '3', '-', 'pi']
  ];

  constructor(private calService: CalculatorService) {

  }

  ngOnInit() {
    this.updateScreen(this.result);
  }

  onClick(value: string, event: any) {
    console.log(value);
    if (value === 'C') {
      this.result = 0;
      this.currentEntry = '0';
    } else if (value === 'CE') {
      this.currentEntry = '0';
    } else if (value === '+/-') {
      this.currentEntry = (+this.currentEntry * -1).toString();
    } else if (value === '.') {
      this.currentEntry += '.';
    } else if (this.isNumber(value)) {
      if (this.currentEntry === '0') {
        this.currentEntry = value;
      } else {
        this.currentEntry = this.currentEntry + value;
      }
    } else if (this.isOperator(value)) {
      this.prevEntry = parseFloat(this.currentEntry);
      this.operation = value;
      this.currentEntry = '';
    } else if (value === '%') {
      this.currentEntry = (+this.currentEntry / 100).toString();
    } else if (value === 'sqrt') {
      this.currentEntry = Math.sqrt(+this.currentEntry).toString();
    } else if (value === '1/x') {
      this.currentEntry = (1 / +this.currentEntry).toString();
    } else if (value === 'pi') {
      this.currentEntry = (Math.PI).toString();
    } else if (value === '=') {
      this.currentEntry = this.calService.operate(this.prevEntry, this.currentEntry, this.operation);
      this.operation = null;
    }

    this.updateScreen(this.currentEntry);
  }

  updateScreen(displayValue: any) {
    this.displayValue = displayValue.toString().substring(0, 10);
  }

  isNumber = function(value) {
    return !isNaN(value);
  };

  isOperator = function(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
  };
}
