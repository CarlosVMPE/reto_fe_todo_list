import { Component, Input } from '@angular/core';
import { Lista } from 'src/app/models/TodoList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todoList: Lista[] = [];
  todoSelected: Lista = new Lista('');

  constructor() {}

  setSelectedTodo(todo: Lista) {
    this.todoSelected = todo;
  }
}
