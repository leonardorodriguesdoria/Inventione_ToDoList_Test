import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoCrudComponent } from './pages/todo-crud/todo-crud.component';
import { TodoCreateComponent } from './components/todo/todo-create/todo-create.component';
import { TodoUpdateComponent } from './components/todo/todo-update/todo-update.component';
import { TodoDeleteComponent } from './components/todo/todo-delete/todo-delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoCrudComponent },
  { path: 'todo/create', component: TodoCreateComponent },
  { path: 'todo/update/:id', component: TodoUpdateComponent },
  { path: 'todo/delete/:id', component: TodoDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
