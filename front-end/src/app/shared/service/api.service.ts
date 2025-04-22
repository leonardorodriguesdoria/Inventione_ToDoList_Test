import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task } from '../models/task.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000/todo';
  private refreshDataSource = new Subject<'create' | 'update' | 'delete'>();
  dataSourceChanged$ = this.refreshDataSource.asObservable();

  constructor(private _httpClient: HttpClient, private snackBar: MatSnackBar) {}

  notifyDataChange(type: 'create' | 'update' | 'delete') {
    this.refreshDataSource.next(type);
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getAllTasks(): Observable<Task[]> {
    return this._httpClient.get<Task[]>(this.API_URL);
  }

  addTask(task: Task): Observable<Task> {
    const payload = {
      ...task,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    return this._httpClient
      .post<Task>(this.API_URL, payload)
      .pipe(tap(() => this.notifyDataChange('create')));
  }

  updateTask(id: number, changes: Partial<Task>): Observable<Task> {
    return this._httpClient
      .patch<Task>(`${this.API_URL}/${id}`, changes)
      .pipe(tap(() => this.notifyDataChange('update')));
  }

  deleteTask(id: number): Observable<void> {
    return this._httpClient
      .delete<void>(`${this.API_URL}/${id}`)
      .pipe(tap(() => this.notifyDataChange('delete')));
  }
}
