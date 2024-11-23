import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Portafolio' },
    { path: 'works', component: WorksComponent, title: 'Works' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }	
  ];

  