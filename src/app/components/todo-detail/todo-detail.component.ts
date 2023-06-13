import { Component, Inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
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
import { ListaItem } from 'src/app/models/TodoItem';
import { Lista } from 'src/app/models/TodoList';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent {
  @Input() todoSelected: Lista = new Lista('');
  @Input() todoList: Lista[] = [];
  description = '';

  formAddItem: FormGroup = this.fb.group({
    nameItem: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  addItemsTodo(): void {
    if (this.nameItem?.value) {
      this.todoList.map((list) => {
        if (list.id === this.todoSelected.id) {
          const nuevoItem = new ListaItem(this.nameItem?.value);
          list.items.push(nuevoItem);
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
    MatButtonModule,
  ],
})
export class EditTodoComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
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
