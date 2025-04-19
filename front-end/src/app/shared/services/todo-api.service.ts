import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateTodo, ITODO, IUpdateTodo } from '../models/todo.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  private readonly API_URL = 'http://localhost:3000/todo';

  constructor(
    private _httpClient: HttpClient,
    private _snackbar: MatSnackBar
  ) {}

  showMessage(msg: string, isError: boolean = false) {
    this._snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getAllTasks(): Observable<ITODO[]> {
    return this._httpClient.get<ITODO[]>(this.API_URL);
  }

  createNewTask(todo: ICreateTodo): Observable<ITODO> {
    return this._httpClient.post<ITODO>(this.API_URL, {
      ...todo,
      dataCriacaoTarefa: new Date().toISOString(),
      completada: false,
    });
  }

  readById(id: number): Observable<ITODO> {
    const _url = `${this.API_URL}/${id}`;
    return this._httpClient.get<ITODO>(_url);
  }

  updateTask(task: ITODO): Observable<ITODO> {
    const _url = `${this.API_URL}/${task.id}`;
    return this._httpClient.put<ITODO>(_url, task);
  }

  deleteTask(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.API_URL}/${id}`);
  }
}
