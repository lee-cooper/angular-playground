import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionalProjectionComponent } from './components/ng-content/conditional-projection/conditional-projection.component';
import { MultiSlotProjectionComponent } from './components/ng-content/multi-slot-projection/multi-slot-projection.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { SingleProjectionComponent } from './components/ng-content/single-projection/single-projection.component';
import { TypedReactiveFormComponent } from './components/reactive-forms/typed-reactive-form/typed-reactive-form.component';
import {
  TodoComponent,
  TodoItemComponent,
  TodoListComponent,
} from './components/todo';
import { UnderlineDirective } from './directives/underline.directive';
import { MaterialModule } from './modules/material.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    SingleProjectionComponent,
    MultiSlotProjectionComponent,
    ConditionalProjectionComponent,
    NavigationComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    UnderlineDirective,
    TypedReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
