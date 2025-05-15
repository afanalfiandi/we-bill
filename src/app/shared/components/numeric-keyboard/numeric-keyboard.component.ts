import { Component, EventEmitter, Output } from '@angular/core';
import { numeric } from './consts/numeric.const';

@Component({
  selector: 'app-numeric-keyboard',
  imports: [],
  templateUrl: './numeric-keyboard.component.html',
  styleUrl: './numeric-keyboard.component.css',
})
export class NumericKeyboardComponent {
  @Output() selectValue = new EventEmitter();
  @Output() deleteValue = new EventEmitter();

  numericKey = numeric;

  onSelectValue(value: any) {
    this.selectValue.emit(value);
  }

  onDeleteValue() {
    this.deleteValue.emit();
  }
}
