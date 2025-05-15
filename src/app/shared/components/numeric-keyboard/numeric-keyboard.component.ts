import { Component } from '@angular/core';
import { numeric } from './consts/numeric.const';

@Component({
  selector: 'app-numeric-keyboard',
  imports: [],
  templateUrl: './numeric-keyboard.component.html',
  styleUrl: './numeric-keyboard.component.css',
})
export class NumericKeyboardComponent {
  numericKey = numeric;
  
}
