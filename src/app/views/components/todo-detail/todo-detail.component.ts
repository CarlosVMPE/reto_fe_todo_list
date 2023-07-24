import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TodolistService } from 'src/app/core/services/todolist.service';
import { TodoItem } from 'src/app/shared/models/TodoItem';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { ActionModal } from 'src/app/shared/interfaces/Dialog';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {

  description: string;
  todoSelected = this.todoListService.todoSelected;

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

  ngOnInit(): void {}

  addItemsTodo(): void {
    if (this.nameItem?.value) {
      this.todoListService.addItemsTodo(this.todoSelected().id, new TodoItem(this.nameItem?.value));
      this.formAddItem.reset();
    }
  }

  editItemTodo(position: number, desc: string) {
    this.todoListService.editItemTodo(this.todoSelected().id, position, desc);
  }

  openDialogByAction(position: number, desc: string, action: string){
    let instanceComponent: ActionModal = { component: DeleteTodoComponent, action: () => this.deleteItemTodo(position) };

    if(action === 'EDIT'){
      instanceComponent = { component: EditTodoComponent, action: (result: any) => this.editItemTodo(position, result)};
    }

    const dialogRef = this.dialog.open(instanceComponent.component, {
      width: '400px',
      data: { description: desc },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        instanceComponent.action(result);
      }
    });
  }

  deleteItemTodo(position: number) {
    this.todoListService.deleteItemTodo(this.todoSelected().id, position);
  }

  toggleCompleteItem(position: number) {
    this.todoListService.toggleCompleteItem(this.todoSelected().id, position);
  }

  get nameItem() {
    return this.formAddItem.get('nameItem');
  }
}
