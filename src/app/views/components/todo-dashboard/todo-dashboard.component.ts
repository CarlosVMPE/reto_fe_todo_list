import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { TodolistService } from 'src/app/core/services/todolist.service';
import { AddTodo } from 'src/app/core/store/todos/todo.actions';
import { TodoSelectors } from 'src/app/core/store/todos/todo.selectors';
import { TodoList } from 'src/app/shared/models/TodoList';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/core/store/todos/Todo.model';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent {
  todoList: TodoList[] = [];
  @Select(TodoSelectors.items)
  items$: Observable<TodoModel[]>;

  formAddTodo: FormGroup = this.fb.group({
    nameTodo: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]],
  });

  constructor(
    private fb: FormBuilder,
    public todoListService: TodolistService,
    public store: Store
    ) {
      this.items$.subscribe(todos => console.log('TODOS: ', todos))
    }

  createNewTodo(): void {
    if (this.nameTodo?.value) {
      this.store.dispatch(new AddTodo(this.nameTodo?.value));
      const newTodoList = new TodoList(this.nameTodo?.value);
      this.todoList.push(newTodoList);
      this.todoListService.updateTodoList(this.todoList);
      this.formAddTodo.reset();
    }
  }

  get nameTodo() {
    return this.formAddTodo.get('nameTodo');
  }
}
