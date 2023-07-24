import { TestBed } from '@angular/core/testing';
import { TodolistService } from './todolist.service';
import { TodoList } from 'src/app/shared/models/TodoList';
import { TodoItem } from 'src/app/shared/models/TodoItem';

describe('TodolistService', () => {
  let service: TodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });

    service = TestBed.inject(TodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be add a new Todo', () => {
    service.addTodo(new TodoList('First Todo'))
    expect(service.todoList().length).toBe(1);
  });

  it('should be add items by todoId', () => {
    service.addTodo(new TodoList('First Todo'))
    service.addItemsTodo(service.todoList()[0].id, new TodoItem('First Item'))
    expect(service.todoList()[0].items.length).toBe(1);
  });

  it('should be not add items by todoId when pass an invalid ID', () => {
    service.addTodo(new TodoList('First Todo'))
    service.addItemsTodo(12345, new TodoItem('First Item'))
    expect(service.todoList()[0].items.length).toBe(0);
  });

  it('should be edit an item by todoId', () => {
    service.addTodo(new TodoList('First Todo'))
    service.addItemsTodo(service.todoList()[0].id, new TodoItem('First Item'))
    service.editItemTodo(service.todoList()[0].id, 0, 'Updated Item')
    expect(service.todoList()[0].items[0].desc).toBe('Updated Item');
  });

  it('should be delete an item by todoId', () => {
    service.addTodo(new TodoList('First Todo'))
    service.deleteItemTodo(service.todoList()[0].id, 0)
    expect(service.todoList()[0].items.length).toBe(0);
  });

  it('should be mark as complete an item of todo', () => {
    service.addTodo(new TodoList('First Todo'))
    service.addItemsTodo(service.todoList()[0].id, new TodoItem('First Item'))
    service.toggleCompleteItem(service.todoList()[0].id, 0);
    expect(service.todoList()[0].items[0].completado).toBeTruthy();
  });

  it('should be update the todo selected', () => {
    service.addTodo(new TodoList('First Todo'))
    service.updateTodoSelected(service.todoList()[0])
    expect(service.todoSelected()).toEqual(service.todoList()[0])
  });
});
