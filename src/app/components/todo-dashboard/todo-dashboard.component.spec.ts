import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoDashboardComponent } from './todo-dashboard.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoNavbarComponent } from '../todo-navbar/todo-navbar.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoDashboardComponent', () => {
  let component: TodoDashboardComponent;
  let fixture: ComponentFixture<TodoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDashboardComponent, TodoNavbarComponent, TodoListComponent],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatExpansionModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(TodoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be add a new todo in the List of Todos', () => {
    component.nameTodo?.setValue('Nuevo Todo');
    component.newTodo();
    expect(component.todoList.length).toBe(1);
    expect(component.todoList.find(item => item.titulo === 'Nuevo Todo')).toBeTruthy();
  })
});
