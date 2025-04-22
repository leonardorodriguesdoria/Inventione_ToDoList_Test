import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/service/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent implements OnInit {
  todoForm!: FormGroup;
  isSaving = false;
  errorMessage = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.todoForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  addTask() {
    if (this.todoForm.valid) {
      this._apiService.addTask(this.todoForm.value).subscribe({
        next: (response) => {
          this._apiService.showMessage('Task cadastrada com sucesso!!!');
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
