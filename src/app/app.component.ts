import { Component, OnInit } from '@angular/core';
import {Router, RouterModule, NavigationStart, NavigationEnd} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';
  animationState = '';
  showRouteName = false;
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.animationState = 'out';
    this.showRouteName = true;
    this.currentRoute = this.capitalizeRoute(this.router.url.replace('/', '') || 'Home');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currentRoute = this.capitalizeRoute(event.url.replace('/', ''));
        this.showRouteName = true;
      }

      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.animationState = 'in';
          setTimeout(() => {
            this.showRouteName = false;
          }, 250);
        }, 400);
      }
    });
  }

  capitalizeRoute(route: string): string {
    if (!route) return 'Home';
    return route.charAt(0).toUpperCase() + route.slice(1);
  }
}