import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TodoNavbarComponent } from './todo-navbar.component';

describe('TodoNavbarComponent', () => {
  let component: TodoNavbarComponent;
  let fixture: ComponentFixture<TodoNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoNavbarComponent],
      imports: [
        MatIconModule,
        MatToolbarModule,
      ]
    });
    fixture = TestBed.createComponent(TodoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
