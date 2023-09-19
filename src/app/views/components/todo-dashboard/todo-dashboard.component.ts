import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodolistService } from '../../../core/services/todolist.service';
import { TodoList } from '../../../shared/models/TodoList';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

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
    public todoListService: TodolistService,
    private gtmService: GoogleTagManagerService) {}

  createNewTodo(): void {
    if (this.nameTodo?.value) {
      const newTodoList = new TodoList(this.nameTodo?.value);
      this.todoListService.addTodo(newTodoList);
      this.formAddTodo.reset();
    }

    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'button-click',
      data: 'my-custom-event',
    };
    this.gtmService.pushTag(gtmTag);
  }

  get nameTodo() {
    return this.formAddTodo.get('nameTodo');
  }
}
