import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { SingleProjectionComponent } from './components/ng-content/single-projection/single-projection.component';
import { MultiSlotProjectionComponent } from './components/ng-content/multi-slot-projection/multi-slot-projection.component';
import { ConditionalProjectionComponent } from './components/ng-content/conditional-projection/conditional-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    SingleProjectionComponent,
    MultiSlotProjectionComponent,
    ConditionalProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
