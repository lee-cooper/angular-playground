import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { TodoComponent } from './components/todo';

const routes: Routes = [
  {
    path: 'ng-content',
    component: NgContentComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
