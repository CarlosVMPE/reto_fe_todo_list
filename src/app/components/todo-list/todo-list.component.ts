import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Lista } from 'src/app/models/TodoList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todoList: Lista[] = [];
  todoSelected: Lista = new Lista('');
  panelOpenState = false;

  constructor() {}

  setSelectedTodo(todo: Lista) {
    this.todoSelected = todo;
  }

  markAsCompleteTodo(todo: Lista) {
    if (todo.items.length > 0) {
      return todo.items.every((item) => item.completado === true);
    } else {
      return false;
    }
  }
}
