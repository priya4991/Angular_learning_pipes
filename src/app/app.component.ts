import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camri',
    year: 2000
  };

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onNameChange(value: string) {
    this.name = value;
  }
}
