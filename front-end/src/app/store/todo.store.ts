// src/app/store/todo.store.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { ICreateTodo, ITODO, IUpdateTodo } from '../shared/models/todo.model';
import { TodoApiService } from '../shared/services/todo-api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  private _todos = new BehaviorSubject<ITODO[]>([]);
  private _loading = new BehaviorSubject<boolean>(false);

  readonly todos$ = this._todos.asObservable();
  readonly loading$ = this._loading.asObservable();

  constructor(private _apiTodoService: TodoApiService) {
    this.load();
  }

  get todos(): ITODO[] {
    return this._todos.getValue();
  }

  load(): void {
    this._loading.next(true);
    this._apiTodoService.getAllTasks().subscribe({
      next: (todos) => {
        this._todos.next(todos);
        this._loading.next(false);
      },
      error: () => this._loading.next(false),
    });
  }
}
