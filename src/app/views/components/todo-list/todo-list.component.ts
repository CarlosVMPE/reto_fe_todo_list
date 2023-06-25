import { Component, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/core/services/todolist.service';
import { TodoList } from 'src/app/shared/models/TodoList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit{
  todoList: TodoList[] = [];
  todoSelected: TodoList = new TodoList('');
  panelOpenState: boolean;

  constructor(public todoListService: TodolistService) {}

  ngOnInit(): void {
    this.todoListService.getTodoList().subscribe(list => this.todoList = [...list])
  }

  setSelectedTodo(todo: TodoList): void{
    this.todoSelected = todo;
    this.todoListService.setTodoSelected(todo);
  }

  markAsCompleteTodo(todo: TodoList): boolean {
    if (todo.items.length > 0) {
      return todo.items.every((item) => item.completado === true);
    } else {
      return false;
    }
  }
}
