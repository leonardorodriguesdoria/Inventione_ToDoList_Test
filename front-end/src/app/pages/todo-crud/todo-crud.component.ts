import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-crud',
  standalone: false,
  templateUrl: './todo-crud.component.html',
  styleUrl: './todo-crud.component.css',
})
export class TodoCrudComponent {
  constructor(private router: Router) {}

  navigateToTodoCreate(): void {
    this.router.navigate(['/todo/create']);
  }
}
