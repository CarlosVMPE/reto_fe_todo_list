import { Component } from '@angular/core';
import { TodolistService } from 'src/app/core/services/todolist.service';
import { TodoList } from 'src/app/shared/models/TodoList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  panelOpenState: boolean;
  todoList = this.todoListService.todoList;

  constructor(public todoListService: TodolistService) {}

  setSelectedTodo(todo: TodoList): void{
    this.todoListService.updateTodoSelected(todo);
  }

  markAsCompleteTodo(todo: TodoList): boolean {
    if (todo.items.length > 0) {
      return todo.items.every((item) => item.completado === true);
    } else {
      return false;
    }
  }
}
