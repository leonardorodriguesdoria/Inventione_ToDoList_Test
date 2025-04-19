import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TodRead2DataSource } from './tod-read2-datasource';
import { ITODO } from '../../../shared/models/todo.model';

@Component({
  selector: 'app-tod-read2',
  templateUrl: './tod-read2.component.html',
  styleUrl: './tod-read2.component.css',
  standalone: false,
})
export class TodRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ITODO>;
  dataSource = new TodRead2DataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'titulo',
    'descrição',
    'completada',
    'data de criação',
    'prazo final',
    'prioridade',
  ];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
