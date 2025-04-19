import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponentsModule } from '../shared/angular-material/angular-material.module';
import { TimeRemainingPipe } from '../pipes/time-remaining.pipe';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { NavComponent } from './templates/nav/nav.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoReadComponent } from './todo/todo-read/todo-read.component';
import { TodoUpdateComponent } from './todo/todo-update/todo-update.component';
import { TodoDeleteComponent } from './todo/todo-delete/todo-delete.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { TodRead2Component } from './todo/tod-read2/tod-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    TodoCreateComponent,
    TodoReadComponent,
    TodoUpdateComponent,
    TodoDeleteComponent,
    TodRead2Component,
  ],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule,
    TimeRemainingPipe,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    TodoCreateComponent,
    TodoReadComponent,
    TodoUpdateComponent,
    TodoDeleteComponent,
    AppRoutingModule,
  ],
})
export class ComponentsModule {}
