import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';

import { TodoListComponent } from './todo-list.component';
import { TodoList } from 'src/app/shared/models/TodoList';
import { TodoItem } from 'src/app/shared/models/TodoItem';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let mockList: TodoList[] = [new TodoList('First Todo'), new TodoList('Second Todo')];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [MatExpansionModule],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.todoList = mockList;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign the selected todo', () => {
    component.setSelectedTodo(component.todoList[0]);
    expect(component.todoSelected).toEqual(component.todoList[0]);
  });

  it('should be return false when not exists any items in a todo', () => {
    expect(component.markAsCompleteTodo(component.todoList[0])).toBeFalsy();
  });

  it('should be return false when all items are incomplete', () => {
    component.todoList[0].items.push(new TodoItem('Task 1'));
    component.todoList[0].items.push(new TodoItem('Task 2'));
    expect(component.markAsCompleteTodo(component.todoList[0])).toBeFalsy();
  });

  it('should be return false when any items exists', () => {
    component.todoList[0].items = []
    expect(component.markAsCompleteTodo(component.todoList[0])).toBeFalse();
  });

});
