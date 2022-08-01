import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';

export interface userDataProfile {
  name: string;
  id: number;
  email: string;
}

const userProfile: userDataProfile[] = [
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
export class TableComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = userProfile;

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

  constructor(public dialog: MatDialog, public http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe((data) => {
      this.dataSource = data as any;
    });
  }

  openDialog(user: userDataProfile | null): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data:
        user === null
          ? {
              id: null,
              name: null,
              email: null,
            }
          : user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }
  editUser(user: userDataProfile) {
    this.openDialog(user);
  }
  deleteUser(id: number): void {
    this.dataSource = this.dataSource.filter((row) => row.id !== id);
  }
}
