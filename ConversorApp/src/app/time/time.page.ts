import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class TimePage {
  inputValue: number | null = null;
  fromUnit: string = 'seconds';
  toUnit: string = 'minutes';
  convertedValue: number | null = null;

  // Tabela de conversão para segundos
  unitConversionRates: { [key: string]: number } = {
    'milliseconds': 0.001, // 1 ms = 0.001 segundos
    'seconds': 1, // Base de referência
    'minutes': 60, // 1 minuto = 60 segundos
    'hours': 3600, // 1 hora = 3600 segundos
    'days': 86400, // 1 dia = 86400 segundos
    'months': 2629800, // 1 mês (média) = 2.629.800 segundos
    'years': 31557600 // 1 ano (média) = 31.557.600 segundos
  };

  convertTime() {
    if (this.inputValue === null) return;

    // Converter para segundos primeiro
    const valueInSeconds = this.inputValue * this.unitConversionRates[this.fromUnit];

    // Converter para a unidade desejada
    this.convertedValue = parseFloat((valueInSeconds / this.unitConversionRates[this.toUnit]).toFixed(6));
  }
}
