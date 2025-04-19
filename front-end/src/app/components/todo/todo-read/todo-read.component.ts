import { Component } from '@angular/core';
import { TodoApiService } from '../../../shared/services/todo-api.service';
import { ITODO } from '../../../shared/models/todo.model';

@Component({
  selector: 'app-todo-read',
  standalone: false,
  templateUrl: './todo-read.component.html',
  styleUrl: './todo-read.component.css',
})
export class TodoReadComponent {
  constructor(private _todoAPIService: TodoApiService) {}

  tasks!: ITODO[];
  displayedColumns = [
    'id',
    'titulo',
    'descricao',
    'status',
    'dataCriacaoTarefa',
    'prazoFinal',
    'prioridade',
    'action',
  ];

  ngOnInit(): void {
    this._todoAPIService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }
}
