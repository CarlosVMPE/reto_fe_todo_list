import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { EditTodoComponent } from './edit-todo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogData } from 'src/app/shared/interfaces/Dialog';

describe('EditTodoComponent', () => {
  let component: EditTodoComponent;
  let fixture: ComponentFixture<EditTodoComponent>;

  const model: DialogData = {
    description: 'Any Description',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTodoComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: model },
        {
          provide: MatDialogRef,
          useValue: { close: () => {}},
        },
      ],
    });
    fixture = TestBed.createComponent(EditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be call to function close', () => {
    const spyClose = spyOn(component.dialogRef, 'close');
    component.onNoClick();
    expect(spyClose).toHaveBeenCalled();
  });

});
