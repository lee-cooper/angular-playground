import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { TypedReactiveFormComponent } from './components/reactive-forms/typed-reactive-form/typed-reactive-form.component';
import { TodoComponent } from './components/todo';

const routes: Routes = [
  {
    path: 'ng-content',
    component: NgContentComponent,
  },
  {
    path: 'reactive-forms',
    component: TypedReactiveFormComponent,
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
