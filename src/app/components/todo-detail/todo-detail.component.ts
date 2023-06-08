import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaItem } from 'src/app/models/TodoItem';
import { Lista } from 'src/app/models/TodoList';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent {
  @Input() todoSelected: Lista = new Lista('');
  @Input() todoList: Lista[] = [];

  formAddItem: FormGroup = this.fb.group({
    nameItem: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  addItemsTodo(): void {
    if(this.nameItem?.value){
      this.todoList.map((list) => {
        if (list.id === this.todoSelected.id) {
          const nuevoItem = new ListaItem(this.nameItem?.value);
          list.items.push(nuevoItem);
        }
      });
    }
  }

  get nameItem() {
    return this.formAddItem.get('nameItem');
  }
}
