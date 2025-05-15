import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/layout/auth-layout/auth-layout.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { ColumnDTO } from '../../shared/dtos/table.dtos';
import { NumericKeyboardComponent } from '../../shared/components/numeric-keyboard/numeric-keyboard.component';

@Component({
  selector: 'app-auth',
  imports: [AuthLayoutComponent, TableComponent, NumericKeyboardComponent],
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
}
