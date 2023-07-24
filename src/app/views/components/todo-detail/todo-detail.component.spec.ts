import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { TodoDetailComponent } from './todo-detail.component';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailComponent],
      imports: [MatDialogModule],
    });
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be add an item to the todo selected', () => {
    const spyAddItems = jest.spyOn(component.todoListService, 'addItemsTodo');
    component.nameItem?.setValue('Tarea 1');
    component.addItemsTodo();
    expect(spyAddItems).toHaveBeenCalled();
  });

  it('should be call to open in dialog for EDIT', () => {
    const spyDialog = jest.spyOn(component.dialog, 'open').mockReturnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<typeof component>);
    component.openDialogByAction(0, 'Tarea 11', 'EDIT');
    expect(spyDialog).toHaveBeenCalled();
  });

  it('should be call to open in dialog for DELETE', () => {
    const spyDialog = jest.spyOn(component.dialog, 'open').mockReturnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<typeof component>);
    component.openDialogByAction(0, 'Tarea 11', 'DELETE');
    expect(spyDialog).toHaveBeenCalled();
  });

  it('should be not call to open in dialog for EDIT / DELETE', () => {
    const spyEdit = jest.spyOn(component, 'editItemTodo');
    component.openDialogByAction(0, 'Tarea 11', 'NO_CASE');
    expect(spyEdit).not.toHaveBeenCalled();
  });

  it('should be toggle the value complete of a item in a todo', () => {
    const spyToggle = jest.spyOn(
      component.todoListService,
      'toggleCompleteItem'
    );
    component.toggleCompleteItem(0);
    expect(spyToggle).toHaveBeenCalled();
  });
});
