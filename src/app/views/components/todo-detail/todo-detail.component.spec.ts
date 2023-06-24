import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTodoComponent, EditTodoComponent, TodoDetailComponent } from './todo-detail.component';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Lista } from 'src/app/shared/models/TodoList';
import { of } from 'rxjs';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;
  let mockList: Lista[] = [new Lista('First Todo'), new Lista('Second Todo')];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailComponent],
      imports: [MatDialogModule, EditTodoComponent, DeleteTodoComponent],
    });
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.todoList = mockList;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be add an item to the first todo', () => {
    component.todoSelected = mockList[0];
    component.todoList[0].items = [];
    component.nameItem?.setValue('Tarea 1');
    component.addItemsTodo();
    expect(component.todoList[0].items.length).toBe(1);
  });

  it('should be call to open in dialog for Edit', () => {
    const spyDialog = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<typeof component>);
    component.openDialogEdit(0, 'Tarea 1');
    expect(spyDialog).toHaveBeenCalled();
  });

  it('should be edit an item of the todo selected', () => {
    component.todoSelected = mockList[0];
    component.todoList[0].items = [];
    component.nameItem?.setValue('Tarea 1');
    component.addItemsTodo();
    component.editItemTodo(0, 'Tarea 11');
    const task1 = component.todoList[0].items.find(item => item.desc === 'Tarea 11')
    expect(task1).toBeTruthy();
  });

  it('should be call to open in dialog for Delete', () => {
    const spyDialog = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<typeof component>);
    component.openDialogDelete(0, 'Tarea 11');
    expect(spyDialog).toHaveBeenCalled();
  });

  it('should be delete an item of the todo selected', () => {
    component.todoSelected = mockList[0];
    component.deleteItemTodo(0);
    const task1 = component.todoList[0].items.find(item => item.desc === 'Tarea 11')
    expect(task1).toBeUndefined();
  });

  it('should be toggle the value complete of a item in a todo', () => {
    component.todoSelected = mockList[0];
    component.nameItem?.setValue('Tarea 1');
    component.addItemsTodo();
    component.toggleCompleteItem(0);
    expect(component.todoList[0].items[0].completado).toBeTrue();
  });

});

