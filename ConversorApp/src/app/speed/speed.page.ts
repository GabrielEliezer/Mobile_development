import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.page.html',
  styleUrls: ['./speed.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SpeedPage {
  inputValue: number | null = null;
  fromUnit: string = 'kmh';
  toUnit: string = 'ms';
  convertedValue: number | null = null;

  unitConversionRates: { [key: string]: number } = {
    'kmh': 1, // Base de referência
    'ms': 0.277778, // 1 km/h = 0.277778 m/s
    'mph': 0.621371, // 1 km/h = 0.621371 milhas/h
  };

  convertSpeed() {
    if (this.inputValue === null) return;

    const valueInKmh = this.inputValue / this.unitConversionRates[this.fromUnit];
    this.convertedValue = parseFloat((valueInKmh * this.unitConversionRates[this.toUnit]).toFixed(2));
  }
}
