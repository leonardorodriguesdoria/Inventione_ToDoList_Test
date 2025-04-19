import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ComponentsModule } from './components/components.module';
import { AngularMaterialComponentsModule } from './shared/angular-material/angular-material.module';
import { HomeComponent } from './pages/home/home.component';
import { TodoCrudComponent } from './pages/todo-crud/todo-crud.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    ComponentsModule,
    AngularMaterialComponentsModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
