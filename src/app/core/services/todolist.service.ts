import { Injectable, signal } from '@angular/core';
import { TodoList } from '../../shared/models/TodoList';
import { TodoItem } from '../../shared/models/TodoItem';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {

  todoList = signal<TodoList[]>([]);
  todoSelected = signal<TodoList>(new TodoList(''));

  addTodo(todo: TodoList) {
    this.todoList.mutate((items) => items.push(todo));
  }

  addItemsTodo(idTodo: number, todo: TodoItem){
    this.todoList().forEach((todoItem) => {
      if (todoItem.id === idTodo) {
        todoItem.items.push(todo);
        return todo;
      }
      return todoItem;
    });
  }

  editItemTodo(idTodo: number, position: number, description: string){
    this.todoList().forEach((todoItem) => {
      if (todoItem.id === idTodo) {
        todoItem.items[position].desc = description;
      }
    });
  }

  deleteItemTodo(idTodo: number, position: number){
    this.todoList().forEach((todoItem) => {
      if (todoItem.id === idTodo) {
        todoItem.items.splice(position, 1);
      }
    });
  }

  toggleCompleteItem(idTodo: number, position: number){
    this.todoList().forEach((todoItem) => {
      if(todoItem.id === idTodo){
        todoItem.items[position].completado = !todoItem.items[position].completado;
      }
    })
  }

  updateTodoSelected(todoSelected: TodoList){
    this.todoSelected.update((selected) => todoSelected)
  }
}
