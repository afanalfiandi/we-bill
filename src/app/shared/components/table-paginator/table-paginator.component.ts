import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-paginator',
  imports: [CommonModule],
  templateUrl: './table-paginator.component.html',
  styleUrl: './table-paginator.component.css',
})
export class TablePaginatorComponent implements OnInit {
  @Input() totalData: number = 0;

  currentPage: number = 0;
  itemPerPage: number = 10;
  totalPage: number = 0;
  startIndex: number = 0;

  ngOnInit(): void {
    this.currentPage =
      this.totalData > 0
        ? Math.floor(this.startIndex / this.itemPerPage) + 1
        : 0;

    this.startIndex = this.totalData > 0 ? this.startIndex + 1 : 0;
    this.totalPage = Math.ceil(this.totalData / this.itemPerPage);
  }
}
