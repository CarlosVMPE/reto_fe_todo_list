import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoList } from 'src/app/shared/models/TodoList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todoList: TodoList[] = [];
  todoSelected: TodoList = new TodoList('');
  panelOpenState: boolean;

  constructor() {}

  setSelectedTodo(todo: TodoList) {
    this.todoSelected = todo;
  }

  markAsCompleteTodo(todo: TodoList) {
    if (todo.items.length > 0) {
      return todo.items.every((item) => item.completado === true);
    } else {
      return false;
    }
  }
}
