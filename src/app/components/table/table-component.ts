import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Rajveer Chandler', email: 'chandler@email.com' },
  { id: 2, name: 'Leela Brown', email: 'Leela@email.com' },
  { id: 3, name: 'Sonia Dale', email: 'Sonia@email.com' },
  { id: 4, name: 'Ellena Dyer', email: 'Ellena@email.com' },
  { id: 5, name: 'Beatrice Burk', email: 'Beatrice@email.com' },
  { id: 6, name: 'Adina Arellano', email: 'Adina@email.com' },
  { id: 7, name: 'Eddison Lozano', email: 'Eddison@email.com' },
  { id: 8, name: 'Kaylen Albert', email: 'Kaylen@email.com' },
];

/**
 */
@Component({
  selector: 'table-component',
  templateUrl: './table-component.html',
  styleUrls: ['./table-component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = ELEMENT_DATA;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent | undefined;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
