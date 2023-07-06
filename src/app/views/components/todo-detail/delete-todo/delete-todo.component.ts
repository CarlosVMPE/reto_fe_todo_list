import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "src/app/shared/interfaces/Dialog";

@Component({
  selector: 'delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['../todo-detail.component.scss']
})
export class DeleteTodoComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
