import { TestBed } from '@angular/core/testing';

import { TodolistService } from './todolist.service';
import { TodoList } from 'src/app/shared/models/TodoList';

describe('TodolistService', () => {
  let service: TodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be update the list of todos', () => {
    service.updateTodoList([new TodoList('First Todo')])
    service.getTodoList().subscribe(list => expect(list.length).toBe(1))
  });

  it('should be update the todo selected', () => {
    const selected = new TodoList('Todo Selected');
    service.setTodoSelected(selected)
    service.getTodoSelected().subscribe(todo => expect(todo).toEqual(selected))
  });
});
