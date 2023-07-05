import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DialogData } from "src/app/shared/interfaces/Dialog";

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['../todo-detail.component.scss'],
})
export class EditTodoComponent {
  formEditItem: FormGroup = this.fbBuild.group({
    description: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
    ],
  });

  constructor(
    private fbBuild: FormBuilder,
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data && data.description) {
      this.description?.setValue(data.description);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get description() {
    return this.formEditItem.get('description');
  }
}