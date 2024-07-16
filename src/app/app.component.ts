import { Component } from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './navigation/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    NavigationComponent,
    MatSidenavContent,
    RouterOutlet,
    HeaderComponent,
  ],
})
export class AppComponent {
  title = 'angular-playground';
}
