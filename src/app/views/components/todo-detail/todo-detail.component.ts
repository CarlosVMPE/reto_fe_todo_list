import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TodolistService } from 'src/app/core/services/todolist.service';
import { TodoItem } from 'src/app/shared/models/TodoItem';
import { TodoList } from 'src/app/shared/models/TodoList';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  todoSelected: TodoList = new TodoList('');
  todoList: TodoList[] = [];
  description: string;

  formAddItem: FormGroup = this.fb.group({
    nameItem: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
    ],
  });

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public todoListService: TodolistService
  ) {}

  ngOnInit(): void {
    this.todoListService
      .getTodoList()
      .subscribe((list) => (this.todoList = [...list]));
    this.todoListService
      .getTodoSelected()
      .subscribe((selected) => (this.todoSelected = selected));
  }

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
