import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoList } from 'src/app/shared/models/TodoList';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private listTodo = new BehaviorSubject<TodoList[]>([]);
  private todoSelected = new BehaviorSubject<TodoList>(new TodoList(''));

  constructor() { }

  updateTodoList(event: TodoList[]) {
    this.listTodo.next(event);
  }

  getTodoList() {
    return this.listTodo.asObservable();
  }

  setTodoSelected(event: TodoList) {
    this.todoSelected.next(event);
  }

  getTodoSelected() {
    return this.todoSelected.asObservable();
  }
}
