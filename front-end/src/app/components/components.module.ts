import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material-module/material-module.module';
import { ToolbarComponent } from './templates/toolbar/toolbar.component';
import { DialogComponent } from './templates/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './templates/table/table.component';
import { EditdialogComponent } from './templates/editdialog/editdialog.component';
import { DeletedialogComponent } from './templates/deletedialog/deletedialog.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    DialogComponent,
    TableComponent,
    EditdialogComponent,
    DeletedialogComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [
    ToolbarComponent,
    DialogComponent,
    TableComponent,
    EditdialogComponent,
    DeletedialogComponent,
  ],
})
export class ComponentsModule {}
