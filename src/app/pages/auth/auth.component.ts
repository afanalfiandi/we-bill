import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/layout/auth-layout/auth-layout.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { ColumnDTO } from '../../shared/dtos/table.dtos';
import { NumericKeyboardComponent } from '../../shared/components/numeric-keyboard/numeric-keyboard.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [
    AuthLayoutComponent,
    TableComponent,
    NumericKeyboardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  column: ColumnDTO[] = [
    {
      key: 'queueID',
      columnName: 'Queue ID',
    },
    {
      key: 'date',
      columnName: 'Date',
    },
    {
      key: 'customer',
      columnName: 'Customer',
    },
    {
      key: 'serviceType',
      columnName: 'Service Type',
    },
    {
      key: 'status',
      columnName: 'Status',
    },
    {
      key: 'total',
      columnName: 'Total',
    },
  ];

  data: any[] = [
    {
      queueID: 'WB123123123',
      date: 'August 25, 2025 10:21 PM',
      customer: 'Matt Shadows',
      serviceType: 'Dine In',
      status: 'New',
      total: 10000,
    },
    {
      queueID: 'WB124124124',
      date: 'August 25, 2025 10:25 PM',
      customer: 'Chester Benington',
      serviceType: 'Dine In',
      status: 'New',
      total: 10000,
    },
    {
      queueID: 'WB125125125',
      date: 'August 25, 2025 10:32 PM',
      customer: 'Oliver Sykes',
      serviceType: 'Dine In',
      status: 'New',
      total: 10000,
    },
  ];

  authForm: FormGroup = new FormGroup({
    pin: new FormControl('', Validators.required),
  });

  onChangeValue(value: number) {
    const currentValue = this.authForm.get('pin')?.value ?? '';
    const newValue = currentValue + value.toString();

    this.authForm.get('pin')?.setValue(newValue);
  }

  onDeleteValue() {
    const currentValue = this.authForm.get('pin')?.value ?? '';

    if (currentValue.length === 0) return;
    const newValue = currentValue.slice(0, -1);

    this.authForm.get('pin')?.setValue(newValue);
  }

  onLogin() {
    console.log(this.authForm.value);
  }
}
