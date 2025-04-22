import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../../../shared/models/task.model';
import { ApiService } from '../../../shared/service/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'description',
    'completed',
    'createdAt',
    'dueDate',
    'priority',
    'action',
  ];
  dataSource!: MatTableDataSource<Task>;
  private destroy$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _apiService: ApiService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllProducts();

    this._apiService.dataSourceChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getAllProducts();
      });
  }
  getAllProducts() {
    this._apiService.getAllTasks().subscribe({
      next: (response) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        alert('Erro na chamada o servidor:' + error);
      },
    });
  }

  editThisTask(row: any) {
    const dialogRef = this._dialog.open(EditdialogComponent, {
      width: '30%',
      data: row,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  deleteThisTask(row: any) {
    const dialogRef = this._dialog.open(DeletedialogComponent, {
      width: '30%',
      data: row,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
