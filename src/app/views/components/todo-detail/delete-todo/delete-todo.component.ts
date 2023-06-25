import { Component, Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
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
