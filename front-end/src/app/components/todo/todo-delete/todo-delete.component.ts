import { Component } from '@angular/core';
import { ITODO } from '../../../shared/models/todo.model';
import { TodoApiService } from '../../../shared/services/todo-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-delete',
  standalone: false,
  templateUrl: './todo-delete.component.html',
  styleUrl: './todo-delete.component.css',
})
export class TodoDeleteComponent {
  task!: ITODO;

  constructor(
    private _todoApiService: TodoApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam === null) {
      console.error('ID não encontrado na URL');
      this.router.navigate(['/todo']);
      return;
    }

    const id = +idParam;
    this._todoApiService.readById(id).subscribe((task) => {
      this.task = task;
    });
  }

  deletarTask() {
    this._todoApiService.deleteTask(this.task.id).subscribe(() => {
      window.confirm('Deseja realmente excluir a task?');
      this._todoApiService.showMessage('Task excluída com Sucesso!!!');
      this.router.navigate(['/todo']);
    });
  }

  cancelarExclusao() {
    this.router.navigate(['/todo']);
  }
}
