import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './views/components/todo-dashboard/todo-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './views/components/todo-list/todo-list.component';
import { TodoDetailComponent } from './views/components/todo-detail/todo-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { EditTodoComponent } from './views/components/todo-detail/edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './views/components/todo-detail/delete-todo/delete-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GTM } from './shared/contants/constants';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoDetailComponent,
    EditTodoComponent,
    DeleteTodoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [
    { provide: 'googleTagManagerId', useValue: GTM.GTM_ID },
    { provide: 'googleTagManagerCSPNonce', useValue: GTM.GTM_ID },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
