import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../shared/service/api.service';
import { EditdialogComponent } from '../editdialog/editdialog.component';

@Component({
  selector: 'app-deletedialog',
  standalone: false,
  templateUrl: './deletedialog.component.html',
  styleUrl: './deletedialog.component.css',
})
export class DeletedialogComponent {
  constructor(
    private _apiService: ApiService,
    private dialogRef: MatDialogRef<DeletedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  deleteTask() {
    this._apiService.deleteTask(this.data.id).subscribe({
      next: (response) => {
        this._apiService.showMessage('Task excluída com sucesso!!!');
        this.dialogRef.close('save');
      },
      error: () => {
        this._apiService.showMessage(
          'Houve algum erro. Por favor tente mais tarde'
        );
      },
    });
  }
}
