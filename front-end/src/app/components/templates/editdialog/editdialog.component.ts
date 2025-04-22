import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../shared/service/api.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-editdialog',
  standalone: false,
  templateUrl: './editdialog.component.html',
  styleUrl: './editdialog.component.css',
})
export class EditdialogComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<EditdialogComponent>
  ) {}

  ngOnInit(): void {
    this.todoForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      completed: [false],
    });

    if (this.editData) {
      this.todoForm.patchValue({
        title: this.editData.title,
        description: this.editData.description,
        dueDate: this.editData.dueDate,
        priority: this.editData.priority,
        completed: this.editData.completed,
      });
    }
    console.log(this.editData);
  }

  editTask() {
    if (this.todoForm.valid) {
      this._apiService
        .updateTask(this.editData.id, this.todoForm.value)
        .subscribe({
          next: (response) => {
            this._apiService.showMessage('Task editada com sucesso!!!');
            this.dialogRef.close(true);
          },
          error: () => {
            this._apiService.showMessage(
              'Houve algum erro. Por favor tente mais tarde'
            );
          },
        });
    }
  }
}
