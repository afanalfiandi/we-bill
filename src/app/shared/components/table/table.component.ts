import { Component, Input, OnInit } from '@angular/core';
import { ColumnDTO } from '../../dtos/table.dtos';
import { TablePaginatorComponent } from '../table-paginator/table-paginator.component';

@Component({
  selector: 'app-table',
  imports: [TablePaginatorComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() columns: ColumnDTO[] = [];
  @Input() data: any[] = [];
}
