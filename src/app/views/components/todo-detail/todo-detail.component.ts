import { Component, Inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodoItem } from 'src/app/shared/models/TodoItem';
import { TodoList } from 'src/app/shared/models/TodoList';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent {
  @Input() todoSelected: TodoList = new TodoList('');
  @Input() todoList: TodoList[] = [];
  description: string;

  formAddItem: FormGroup = this.fb.group({
    nameItem: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  addItemsTodo(): void {
    if (this.nameItem?.value) {
      this.todoList.map((list) => {
        if (list.id === this.todoSelected.id) {
          const newTodoItem = new TodoItem(this.nameItem?.value);
          list.items.push(newTodoItem);
          this.formAddItem.reset();
        }
      });
    }
  }

  openDialogEdit(position: number, desc: string): void {
    const dialogRef = this.dialog.open(EditTodoComponent, {
      width: '400px',
      data: { description: desc },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editItemTodo(position, result);
      }
    });
  }

  editItemTodo(position: number, desc: string) {
    this.todoList.map((list) => {
      if (list.id === this.todoSelected.id) {
        list.items[position].desc = desc;
      }
    });
  }

  openDialogDelete(position: number, desc: string): void {
    const dialogRef = this.dialog.open(DeleteTodoComponent, {
      width: '400px',
      data: { description: desc },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteItemTodo(position);
      }
    });
  }

  deleteItemTodo(position: number) {
    this.todoList.map((list) => {
      if (list.id === this.todoSelected.id) {
        list.items.splice(position, 1);
      }
    });
  }

  toggleCompleteItem(position: number) {
    this.todoList.map((list) => {
      if (list.id === this.todoSelected.id) {
        list.items[position].completado = !list.items[position].completado;
      }
    });
  }

  get nameItem() {
    return this.formAddItem.get('nameItem');
  }
}

/* Edit Item Component */

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo/edit-todo.html',
  styleUrls: ['./todo-detail.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class EditTodoComponent {
  formEditItem: FormGroup = this.fbBuild.group({
    description: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
  });

  constructor(
    private fbBuild: FormBuilder,
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if(data && data.description){
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

/* Delete Item Component */

@Component({
  selector: 'delete-todo',
  templateUrl: './delete-todo/delete-todo.html',
  styleUrls: ['./todo-detail.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
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

export interface DialogData {
  description: string;
}
