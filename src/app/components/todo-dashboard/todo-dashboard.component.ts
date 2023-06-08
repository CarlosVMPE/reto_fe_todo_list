import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lista } from 'src/app/models/TodoList';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent {
  todoList: Lista[] = [];

  formAddTodo: FormGroup = this.fb.group({
    nameTodo: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  newTodo(): void {
    if (this.nameTodo?.value) {
      const nuevaLista = new Lista(this.nameTodo?.value);
      this.todoList.push(nuevaLista);
      this.formAddTodo.reset();
    }
  }

  get nameTodo() {
    return this.formAddTodo.get('nameTodo');
  }
}
