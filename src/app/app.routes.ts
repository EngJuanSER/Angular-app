import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Juan Serrano' },
    { path: 'works', component: WorksComponent, title: 'Works | Juan Serrano' },
    { path: 'about', component: AboutComponent, title: 'About | Juan Serrano' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }	
  ];

  