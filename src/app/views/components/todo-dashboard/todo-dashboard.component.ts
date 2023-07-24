import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodolistService } from '../../../core/services/todolist.service';
import { TodoList } from '../../../shared/models/TodoList';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent {

  formAddTodo: FormGroup = this.fb.group({
    nameTodo: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
  });

  constructor(
    private fb: FormBuilder,
    public todoListService: TodolistService) {}

  createNewTodo(): void {
    if (this.nameTodo?.value) {
      const newTodoList = new TodoList(this.nameTodo?.value);
      this.todoListService.addTodo(newTodoList);
      this.formAddTodo.reset();
    }
  }

  get nameTodo() {
    return this.formAddTodo.get('nameTodo');
  }
}
