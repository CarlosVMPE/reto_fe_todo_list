import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

describe('TodoDashboardComponent', () => {
  let component: TodoDashboardComponent;
  let fixture: ComponentFixture<TodoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoDashboardComponent,
        TodoListComponent,
        NavbarComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatExpansionModule,
        ReactiveFormsModule,
      ],
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
    component.createNewTodo();
    expect(component.todoList.length).toBe(1);
    expect(
      component.todoList.find((item) => item.titulo === 'Nuevo Todo')
    ).toBeTruthy();
  });
});
