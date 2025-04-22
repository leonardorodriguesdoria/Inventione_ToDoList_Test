import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  @Output() taskAdded = new EventEmitter<void>();
  isMenuOpen = false;

  constructor(private _dialog: MatDialog) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  addNewTask() {
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
