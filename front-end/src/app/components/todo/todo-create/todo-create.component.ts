import { Component } from '@angular/core';
import { TodoApiService } from '../../../shared/services/todo-api.service';
import { Router } from '@angular/router';
import { ITODO } from '../../../shared/models/todo.model';

@Component({
  selector: 'app-todo-create',
  standalone: false,
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.css',
})
export class TodoCreateComponent {
  todo: ITODO = {
    id: 0,
    titulo: '',
    descricao: '',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prazoFinal: new Date(),
    prioridade: '',
  };

  prioridades: string[] = ['Baixa', 'Media', 'Alta'];

  constructor(
    private _todoAPIService: TodoApiService,
    private _router: Router
  ) {}

  criarProduto() {
    this._todoAPIService.createNewTask(this.todo).subscribe(() => {
      this._todoAPIService.showMessage('Tarefa Registrada com sucesso!!!');
      this._router.navigate(['/products']);
    });
  }

  cancelarRegistro() {
    this._router.navigate(['/products']);
  }
}
