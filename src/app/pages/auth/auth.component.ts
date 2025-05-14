import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../shared/layout/auth-layout/auth-layout.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { ColumnDTO } from '../../shared/dtos/table.dtos';

@Component({
  selector: 'app-auth',
  imports: [AuthLayoutComponent, TableComponent],
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
      queueID: 'WB123123123',
      date: 'August 25, 2025 10:21 PM',
      customer: 'Matt Shadows',
      serviceType: 'Dine In',
      status: 'New',
      total: 10000,
    },
    {
      queueID: 'WB123123123',
      date: 'August 25, 2025 10:21 PM',
      customer: 'Matt Shadows',
      serviceType: 'Dine In',
      status: 'New',
      total: 10000,
    },
  ];
}
