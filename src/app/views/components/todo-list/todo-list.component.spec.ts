import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';

import { TodoListComponent } from './todo-list.component';
import { TodoList } from 'src/app/shared/models/TodoList';
import { TodoItem } from 'src/app/shared/models/TodoItem';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [MatExpansionModule],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign and call to selected todo', () => {
    const spySelected = jest.spyOn(
      component.todoListService,
      'updateTodoSelected'
    );
    component.setSelectedTodo(new TodoList('Todo Example'));
    expect(spySelected).toHaveBeenCalled();
  });

  it('should be return false when not exists any items in a todo', () => {
    expect(
      component.markAsCompleteTodo(new TodoList('Todo Example'))
    ).toBeFalsy();
  });

  it('should be return true when all items are complete', () => {
    const todoExample: TodoList = new TodoList('Todo Example');
    todoExample.items.push(new TodoItem('1'));
    todoExample.items[0].completado = true;
    expect(component.markAsCompleteTodo(todoExample)).toBeTruthy();
  });
});
