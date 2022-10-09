import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionalProjectionComponent } from './components/ng-content/conditional-projection/conditional-projection.component';
import { MultiSlotProjectionComponent } from './components/ng-content/multi-slot-projection/multi-slot-projection.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { SingleProjectionComponent } from './components/ng-content/single-projection/single-projection.component';
import {
  TodoComponent,
  TodoItemComponent,
  TodoListComponent,
} from './components/todo';
import { MaterialModule } from './modules/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { UnderlineDirective } from './directives/underline.directive';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
