import { Component, Input, OnInit } from '@angular/core';
import { ColumnDTO } from '../../dtos/table.dtos';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  @Input() columns: ColumnDTO[] = [];
  @Input() data: any[] = [];

  sizes!: any[];

  selectedSize: any = '';

  ngOnInit(): void {
    this.sizes = [{ name: 'Large', class: 'p-datatable-lg' }];
    this.selectedSize = this.sizes[0];
  }
}
