import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDashboardComponent } from './views/components/todo-dashboard/todo-dashboard.component';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { GTM } from './shared/contants/constants';

const routes: Routes = [{ path: '**', component: TodoDashboardComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GoogleTagManagerModule.forRoot({
      id: GTM.GTM_ID
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
