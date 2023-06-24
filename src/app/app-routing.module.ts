import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './views/components/todo-dashboard/todo-dashboard.component';

const routes: Routes = [{ path: '**', component: TodoDashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
