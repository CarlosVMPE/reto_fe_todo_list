import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodolistService } from 'src/app/core/services/todolist.service';
import { TodoList } from 'src/app/shared/models/TodoList';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent {
  todoList: TodoList[] = [];

  formAddTodo: FormGroup = this.fb.group({
    nameTodo: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
  });

  constructor(
    private fb: FormBuilder,
    public todoListService: TodolistService) {}

  createNewTodo(): void {
    if (this.nameTodo?.value) {
      const newTodoList = new TodoList(this.nameTodo?.value);
      this.todoList.push(newTodoList);
      this.todoListService.updateTodoList(this.todoList);
      this.formAddTodo.reset();
    }
  }

  get nameTodo() {
    return this.formAddTodo.get('nameTodo');
  }
}
