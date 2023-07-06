import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/shared/models/TodoList';
import { TodoSelected, UpdateTodos } from '../store/todos/todo.actions';
import { TodoSelectors } from '../store/todos/todo.selectors';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  @Select(TodoSelectors.items)
  items$: Observable<TodoList[]>;

  @Select(TodoSelectors.selected)
  selected$: Observable<TodoList>;

  constructor(public store: Store) { }

  updateTodoList(todoList: TodoList[]) {
    this.store.dispatch(new UpdateTodos(todoList));
  }

  getTodoList() {
    return this.items$;
  }

  setTodoSelected(todoSelected: TodoList) {
    this.store.dispatch(new TodoSelected(todoSelected));
  }

  getTodoSelected() {
    return this.selected$;
  }
}
