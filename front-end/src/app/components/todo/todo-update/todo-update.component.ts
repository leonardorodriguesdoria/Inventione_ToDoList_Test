import { Component } from '@angular/core';
import { ITODO } from '../../../shared/models/todo.model';
import { TodoApiService } from '../../../shared/services/todo-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-update',
  standalone: false,
  templateUrl: './todo-update.component.html',
  styleUrl: './todo-update.component.css',
})
export class TodoUpdateComponent {
  task: ITODO = {
    id: 0,
    titulo: '',
    completada: false,
    dataCriacaoTarefa: new Date(),
    prioridade: '',
  };

  prioridades: string[] = ['Baixa', 'Media', 'Alta'];
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

  alterarTask() {
    this._todoApiService.updateTask(this.task).subscribe(() => {
      this._todoApiService.showMessage('task atualizada com Sucesso!!!');
      this.router.navigate(['/todo']);
    });
  }

  cancelarAlteracao() {
    this.router.navigate(['/products']);
  }
}
