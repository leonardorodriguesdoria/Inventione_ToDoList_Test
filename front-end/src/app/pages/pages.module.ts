import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoCrudComponent } from './todo-crud/todo-crud.component';
import { AngularMaterialComponentsModule } from '../shared/angular-material/angular-material.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, TodoCrudComponent],
  imports: [CommonModule, AngularMaterialComponentsModule, ComponentsModule],
  exports: [HomeComponent, TodoCrudComponent],
})
export class PagesModule {}
