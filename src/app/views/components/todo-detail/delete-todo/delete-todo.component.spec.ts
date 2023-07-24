import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogData } from 'src/app/shared/interfaces/Dialog';
import { DeleteTodoComponent } from './delete-todo.component';

describe('DeleteTodoComponent', () => {
  let component: DeleteTodoComponent;
  let fixture: ComponentFixture<DeleteTodoComponent>;

  const model: DialogData = {
    description: 'Any Description',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTodoComponent],
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
          useValue: { close: () => {} },
        },
      ],
    });
    fixture = TestBed.createComponent(DeleteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be call to function close', () => {
    const spyClose = jest.spyOn(component.dialogRef, 'close');
    component.onNoClick();
    expect(spyClose).toHaveBeenCalled();
  });
});
